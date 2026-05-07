const doctrineLevels = {
  dogma: {
    label: "Dogma, must be believed",
    shortLabel: "Dogma",
    guidance: "This is presented as binding Catholic dogma. Catholics are obliged to believe defined dogma.",
  },
  doctrine: {
    label: "Authoritative doctrine",
    shortLabel: "Doctrine",
    guidance: "This is presented as authoritative Catholic doctrine and calls for religious assent.",
  },
  discipline: {
    label: "Discipline or practice",
    shortLabel: "Discipline",
    guidance: "This concerns Church discipline, devotional practice, or pastoral application, which may develop or vary by lawful authority.",
  },
  opinion: {
    label: "Permissible theological opinion",
    shortLabel: "Opinion",
    guidance: "This is presented as theological opinion or interpretation, not as binding dogma.",
  },
};

function classifyCatholicQuestion(question, selectedAuthority = "opinion") {
  const q = String(question || "").toLowerCase();

  if (q.includes("eucharist") || q.includes("body and blood") || q.includes("real presence") || q.includes("transubstantiation")) {
    return {
      authorityKey: "dogma",
      title: "Catholic Answer: The Eucharist",
      answer: "Yes. The Catholic Church teaches that the Eucharist is truly, really, and substantially the Body and Blood of Jesus Christ, not merely a symbol. This is binding Catholic dogma. The bread and wine become Christ's Body and Blood while the appearances of bread and wine remain.\\n\\nA full source-backed version would cite CCC 1374-1377, the institution narratives, John 6, 1 Corinthians 10-11, the Greek language of participation and communion, and early witnesses such as Ignatius of Antioch and Justin Martyr.",
      sources: ["CCC 1374-1377", "John 6", "1 Corinthians 10-11", "Ignatius of Antioch", "Justin Martyr"],
    };
  }

  if (q.includes("mary") || q.includes("immaculate") || q.includes("assumption") || q.includes("mother of god") || q.includes("theotokos") || q.includes("perpetual virgin")) {
    return {
      authorityKey: "dogma",
      title: "Catholic Answer: Mary",
      answer: "Several Marian teachings are Catholic dogma, including Mary as Mother of God, her Immaculate Conception, her Perpetual Virginity, and her Assumption. The exact answer depends on which Marian claim is being tested.\\n\\nA full source-backed version would distinguish the specific doctrine, then cite the CCC, councils, dogmatic definitions, Scripture, early Christian witness, and Greek terms such as Theotokos where relevant.",
      sources: ["Council of Ephesus", "CCC 484-511", "Ineffabilis Deus", "Munificentissimus Deus", "Luke 1"],
    };
  }

  if (q.includes("brothers of jesus") || q.includes("siblings of jesus") || q.includes("did jesus have siblings") || q.includes("jesus have brothers") || q.includes("jesus have sisters")) {
    return {
      authorityKey: "dogma",
      title: "Catholic Answer: The Brothers of Jesus",
      answer: "The Catholic Church teaches the perpetual virginity of Mary, which means Mary remained ever-virgin before, during, and after the birth of Christ. Because of this, Catholic teaching rejects the idea that Jesus had biological siblings born from Mary. This teaching is binding Catholic dogma.\\n\\nCatholic explanations for the New Testament references to the brothers of Jesus include extended family relations such as cousins or close kin, and in some early traditions, children from a previous marriage of Joseph.\\n\\nA full source-backed version would examine the Greek term adelphoi, Septuagint usage where brother can describe broader kinship, relevant Gospel passages, early Church testimony, and CCC 499-500.",
      sources: ["CCC 499-500", "Matthew 13:55-56", "Mark 6:3", "Septuagint kinship usage", "Protoevangelium of James"],
    };
  }

  if (q.includes("created in 7 days") || q.includes("created in seven days") || q.includes("world created in 7 days") || q.includes("world created in seven days") || q.includes("literal 7 days") || q.includes("literal seven days") || q.includes("genesis creation")) {
    return {
      authorityKey: "doctrine",
      title: "Catholic Answer: Creation and the Seven Days",
      answer: "The Catholic Church requires belief that God is the Creator of all things, visible and invisible. That is binding Catholic doctrine and is professed in the Creed.\\n\\nHowever, Catholics are not required to believe that the world was created in seven literal 24-hour days. The Church permits faithful readings of Genesis that recognize theological, literary, and symbolic dimensions, as long as they preserve the truths God intended to teach: God created everything, creation is good, man and woman are made in God's image, sin is real, and creation depends entirely on God.\\n\\nSo the answer is: God as Creator is binding Catholic teaching. A strict seven 24-hour day interpretation is not itself a defined dogma that every Catholic must hold.",
      sources: ["Genesis 1-2", "Nicene Creed", "CCC 279-324", "Dei Verbum", "Humani Generis"],
    };
  }

  if (q.includes("how many dogmas") || q.includes("number of dogmas") || q.includes("how many catholic dogmas")) {
    return {
      authorityKey: "opinion",
      title: "Catholic Answer: Number of Dogmas",
      answer: "The Catholic Church does not publish one universally fixed official numbered list of every dogma. Different theologians and reference works count them differently depending on how broadly or narrowly doctrines are grouped.\\n\\nCatholic theology commonly recognizes many defined dogmatic propositions across subjects such as the Trinity, Christology, the sacraments, grace, Mary, the Church, judgment, and the resurrection.\\n\\nSo the question itself is not a dogma. It is a theological and historical classification question about how dogmatic definitions are counted and organized.",
      sources: ["Catechism of the Catholic Church", "Ecumenical Councils", "Ott: Fundamentals of Catholic Dogma", "Canon law", "Magisterial definitions"],
    };
  }

  if (q.includes("pope") || q.includes("papacy") || q.includes("peter") || q.includes("keys") || q.includes("rock")) {
    return {
      authorityKey: "doctrine",
      title: "Catholic Answer: Peter and the Papacy",
      answer: "From a Catholic perspective, Christ gave Peter a unique office of authority among the apostles, and that Petrine office continues in the bishops of Rome. This belongs to Catholic doctrine concerning apostolic succession and the visible unity of the Church.\\n\\nA full source-backed version would examine Matthew 16, Luke 22, John 21, Isaiah 22, relevant Greek wording, early Church testimony, Vatican I, Vatican II, and CCC 880-887.",
      sources: ["Matthew 16:18-19", "Luke 22:31-32", "John 21:15-17", "Isaiah 22", "CCC 880-887"],
    };
  }

  if (q.includes("confession") || q.includes("mortal sin") || q.includes("absolution") || q.includes("forgive sins") || q.includes("penance")) {
    return {
      authorityKey: "doctrine",
      title: "Catholic Answer: Confession",
      answer: "The Catholic Church teaches that Christ gave the apostles real authority to forgive sins, and sacramental confession is the ordinary means of reconciliation for grave post-baptismal sin.\\n\\nA full source-backed version would cite John 20:21-23, James 5:14-16, CCC 1422-1498, and early Christian penitential practice.",
      sources: ["John 20:21-23", "James 5:14-16", "CCC 1422-1498", "Early penitential practice"],
    };
  }

  if (q.includes("purgatory")) {
    return {
      authorityKey: "dogma",
      title: "Catholic Answer: Purgatory",
      answer: "Yes. The Catholic Church teaches purgatory as a final purification of those who die in God's grace and friendship but are still imperfectly purified. This is binding Catholic dogma, though many popular images of purgatory go beyond what the Church has defined.\\n\\nA full source-backed version would cite CCC 1030-1032, 2 Maccabees 12, 1 Corinthians 3, Matthew 12:32, and magisterial definitions from Florence and Trent.",
      sources: ["CCC 1030-1032", "2 Maccabees 12", "1 Corinthians 3", "Council of Florence", "Council of Trent"],
    };
  }

  return {
    authorityKey: selectedAuthority,
    title: "Catholic Answer",
    answer: "Veritas Lens received your question. This live-app starter includes a working API route and a local Catholic classifier. The next production step is connecting this route to a controlled Catholic source database and retrieval engine so it can answer with direct citations from Sacred Scripture, the Catechism, magisterial documents, dogmatic definitions, the Septuagint, Codex Vaticanus where relevant, early Koine Greek New Testament witnesses, and early Church testimony.",
    sources: ["CCC", "Sacred Scripture", "Magisterium", "Dogma and doctrine", "Early Church witness"],
  };
}

function scoreClaim(text = "") {
  const lower = text.toLowerCase();
  let score = 50;
  const findings = [];

  ["official", "source link", "archive", "ccc", "paragraph", "primary source"].forEach((term) => {
    if (lower.includes(term)) {
      score += 8;
      findings.push({ type: "support", text: `Checkable source indicator found: ${term}.` });
    }
  });

  ["viral", "screenshot", "no source", "no link", "cropped", "rumor", "deleted"].forEach((term) => {
    if (lower.includes(term)) {
      score -= 9;
      findings.push({ type: "risk", text: `Weak evidence signal found: ${term}.` });
    }
  });

  score = Math.max(0, Math.min(100, score));
  return {
    score,
    verdict: score >= 75 ? "Reasonably reliable" : score >= 50 ? "Needs discernment" : "Do not rely on it yet",
    findings: findings.length ? findings : [{ type: "neutral", text: "No major claim-analysis signals detected." }],
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const question = String(body.question || "").trim();
    const mode = body.mode === "claim" ? "claim" : "qa";
    const selectedAuthority = body.selectedAuthority || "opinion";

    if (!question) {
      return Response.json({ error: "Question is required." }, { status: 400 });
    }

    const catholicAnswer = classifyCatholicQuestion(question, selectedAuthority);
    const authority = doctrineLevels[catholicAnswer.authorityKey] || doctrineLevels[selectedAuthority];
    const claim = scoreClaim(question);

    return Response.json({
      ok: true,
      mode,
      question,
      title: mode === "qa" ? catholicAnswer.title : "Claim Analysis Result",
      answer: mode === "qa" ? catholicAnswer.answer : `${claim.verdict}. ${claim.findings.map((f) => f.text).join(" ")}`,
      authorityKey: catholicAnswer.authorityKey,
      authorityLabel: authority.label,
      authorityGuidance: authority.guidance,
      score: mode === "qa" ? (catholicAnswer.authorityKey === "dogma" ? 100 : catholicAnswer.authorityKey === "doctrine" ? 88 : 60) : claim.score,
      sources: mode === "qa" ? catholicAnswer.sources : ["Source integrity", "Context", "Continuity", "Independent verification"],
      findings: mode === "qa"
        ? [
            { type: "support", text: `${authority.shortLabel} classification returned.` },
            { type: "support", text: "Catholic answer generated by the Veritas Lens API route." },
          ]
        : claim.findings,
    });
  } catch (error) {
    return Response.json({ error: "Unable to process request." }, { status: 500 });
  }
}
