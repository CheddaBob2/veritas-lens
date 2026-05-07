"use client";

import React, { useState } from "react";

const doctrineStyles = {
  dogma: "bg-red-800 text-red-100 border-red-500",
  doctrine: "bg-amber-800 text-amber-100 border-amber-500",
  discipline: "bg-blue-800 text-blue-100 border-blue-500",
  opinion: "bg-stone-700 text-stone-100 border-stone-500",
};

const examples = [
  "Does the Catholic Church teach that the Eucharist is literally the Body and Blood of Christ?",
  "Did Jesus have siblings?",
  "Was the world created in 7 days?",
  "How many dogmas are there?",
];

export default function Home() {
  const [question, setQuestion] = useState(examples[0]);
  const [mode, setMode] = useState("qa");
  const [authority, setAuthority] = useState("opinion");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGo(event) {
    event.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setAnswer(null);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, mode, selectedAuthority: authority }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Request failed.");
      setAnswer(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const report = answer
    ? `VERITAS LENS REPORT\n\nQuestion:\n${answer.question}\n\nAuthority:\n${answer.authorityLabel}\n\nAnswer:\n${answer.answer}\n\nSources:\n${answer.sources.map((s) => `- ${s}`).join("\n")}\n\nFindings:\n${answer.findings.map((f) => `- ${f.type.toUpperCase()}: ${f.text}`).join("\n")}`
    : "";

  async function copyReport() {
    if (!report) return;
    await navigator.clipboard.writeText(report);
  }

  return (
    <main className="min-h-screen bg-stone-950 p-4 text-stone-100 sm:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-3xl border border-amber-900/40 bg-gradient-to-br from-stone-900 to-stone-950 p-6 shadow-xl sm:p-8">
          <div className="inline-flex rounded-full border border-amber-800/60 bg-stone-950 px-3 py-1 text-sm text-amber-200">
            ✝ Veritas Lens
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-50 sm:text-5xl">
            Test everything. Hold fast to what is true.
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-stone-300">
            A live-app starter for Catholic Q&A, dogma flagging, and claim analysis. The app now uses a backend API route instead of only local UI logic.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-5 shadow-xl sm:p-6">
            <h2 className="text-2xl font-semibold">Ask a Catholic question or test a claim</h2>
            <p className="mt-2 text-sm leading-6 text-stone-400">
              Type your question, then click Go. The app calls the live backend route at /api/ask.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button onClick={() => setMode("qa")} className={`rounded-2xl px-4 py-3 text-sm font-semibold ${mode === "qa" ? "bg-amber-500 text-stone-950" : "border border-stone-700 text-stone-200"}`}>
                Catholic Q&A Mode
              </button>
              <button onClick={() => setMode("claim")} className={`rounded-2xl px-4 py-3 text-sm font-semibold ${mode === "claim" ? "bg-amber-500 text-stone-950" : "border border-stone-700 text-stone-200"}`}>
                Claim Analysis Mode
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-amber-900/40 bg-stone-950 p-4">
              <label className="text-sm font-semibold text-amber-200">Default authority flag</label>
              <select value={authority} onChange={(e) => setAuthority(e.target.value)} className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100">
                <option value="dogma">Dogma</option>
                <option value="doctrine">Doctrine</option>
                <option value="discipline">Discipline</option>
                <option value="opinion">Opinion</option>
              </select>
            </div>

            <form onSubmit={handleGo} className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="min-h-60 w-full rounded-2xl border border-stone-700 bg-stone-950 p-4 text-base leading-7 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-500"
              />
              <button disabled={!question.trim() || loading} className="rounded-2xl bg-amber-500 px-8 text-lg font-bold text-stone-950 transition hover:bg-amber-400 disabled:opacity-50 md:min-h-60">
                {loading ? "Checking..." : "Go"}
              </button>
            </form>

            {error && <p className="mt-4 rounded-xl border border-red-800 bg-red-950/40 p-3 text-sm text-red-200">{error}</p>}

            <div className="mt-5">
              <p className="text-sm font-medium text-stone-300">Try an example:</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-4">
                {examples.map((example, index) => (
                  <button key={example} type="button" className="rounded-2xl bg-stone-800 px-3 py-3 text-left text-xs leading-5 text-stone-200 hover:bg-stone-700" onClick={() => setQuestion(example)}>
                    Example {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6 shadow-xl">
              <h2 className="text-xl font-semibold">Result</h2>
              {!answer ? (
                <p className="mt-3 text-stone-400">Enter a question and click Go.</p>
              ) : (
                <>
                  <div className={`mt-4 inline-flex rounded-full border px-3 py-2 text-sm font-semibold ${doctrineStyles[answer.authorityKey] || doctrineStyles.opinion}`}>
                    {answer.authorityLabel}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-amber-200">{answer.title}</h3>
                  <div className="mt-4 whitespace-pre-wrap rounded-2xl border border-stone-800 bg-stone-950 p-4 leading-8 text-stone-300">
                    {answer.answer}
                  </div>
                </>
              )}
            </div>

            {answer && (
              <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6 shadow-xl">
                <h2 className="text-xl font-semibold">Sources and findings</h2>
                <div className="mt-4 grid gap-2">
                  {answer.sources.map((source) => (
                    <div key={source} className="rounded-xl border border-stone-800 bg-stone-950 p-3 text-sm text-amber-200">{source}</div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {answer.findings.map((finding, index) => (
                    <div key={index} className="rounded-xl border border-stone-800 bg-stone-950 p-3 text-sm text-stone-300">
                      <span className={finding.type === "risk" ? "text-red-300" : "text-emerald-300"}>{finding.type}</span>: {finding.text}
                    </div>
                  ))}
                </div>
                <button onClick={copyReport} className="mt-4 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-400">
                  Copy report
                </button>
              </div>
            )}
          </aside>
        </section>

        <section className="rounded-3xl border border-stone-800 bg-stone-900 p-6 shadow-xl">
          <h2 className="text-xl font-semibold">Production next step</h2>
          <p className="mt-3 leading-7 text-stone-300">
            This package is deployable now. To make it truly source-connected, replace the classifier inside app/api/ask/route.js with a retrieval system that searches a curated Catholic document database and returns direct citations.
          </p>
        </section>
      </div>
    </main>
  );
}
