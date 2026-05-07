# Veritas Lens Live App

This is a deployable Next.js starter for Veritas Lens.

## What works now

- Live frontend
- Working `Go` button
- Backend API route at `/api/ask`
- Catholic Q&A mode
- Claim Analysis mode
- Dogma/doctrine/discipline/opinion authority flagging
- Copyable report
- Vercel-ready project structure

## Run locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload these files.
3. Go to Vercel.
4. Import the repository.
5. Click Deploy.

## Production upgrade path

The current `/api/ask` route uses a local classifier. To make Veritas Lens a true production Catholic answer engine:

1. Build a controlled Catholic source library.
2. Chunk and index:
   - Catechism of the Catholic Church
   - Ecumenical councils
   - Papal documents
   - Dogmatic definitions
   - Scripture
   - Septuagint references
   - Codex Vaticanus references
   - Early Koine Greek New Testament witnesses
   - Church Fathers
3. Add vector search.
4. Replace the local classifier with RAG.
5. Require source citations in every answer.
6. Keep dogma flags rule-based and manually auditable.
