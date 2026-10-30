# Founder Memory

A polished hackathon MVP that turns company documents into a queryable startup memory using Appwrite VectorsDB.

## What ships

- Email/password authentication with Appwrite Auth
- PDF, Markdown, and text ingestion
- Appwrite Storage upload
- Batched Appwrite text embeddings
- 768-dimensional VectorsDB documents with source metadata
- Cosine-similarity retrieval
- Grounded AI answers with citations
- Extractive fallback when no OpenAI key is supplied
- Responsive dashboard designed for a 2-minute demo

## 1. Create Appwrite resources

Create an Appwrite project and a server API key with these scopes:

- `vectorsdb.read`, `vectorsdb.write`
- `vectorsdb.collections.read`, `vectorsdb.collections.write`
- `vectorsdb.documents.read`, `vectorsdb.documents.write`
- `embeddings.write`
- `buckets.read`, `buckets.write`
- `files.read`, `files.write`

Add a Web platform for `localhost` and your eventual Vercel domain.

Copy `.env.example` to `.env.local`, fill in the credentials, then run:

```bash
set -a
source .env.local
set +a
node scripts/setup-appwrite.mjs
```

This creates:

- VectorsDB database: `founder-memory`
- 768-dimensional collection: `knowledge`
- Storage bucket: `founder-memory-files`

The collection dimension matches Appwrite's default `nomic-embed-text` model.

## 2. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Deploy to Vercel

1. Push this folder to a new public GitHub repository.
2. Import the repository into Vercel.
3. Add every variable from `.env.example` in Vercel Project Settings > Environment Variables.
4. Deploy.
5. Add the Vercel hostname as an Appwrite Web platform.

Never expose `APPWRITE_API_KEY` as a `NEXT_PUBLIC_` variable.

## Demo flow

1. Upload three realistic files: investor notes, customer interviews, and product decisions.
2. Ask, “What objections do investors repeat?”
3. Expand the returned source cards.
4. Ask, “Why did we postpone the mobile launch?”
5. Point out that Appwrite creates the embeddings, VectorsDB stores every chunk, and cosine search retrieves the supporting evidence.

## Important production note

This hackathon build keeps ingestion fast and simple. For a public production launch, validate Appwrite sessions in each server route, associate every vector with a user/team ID, filter retrieval by that owner, and move large ingestion jobs to Appwrite Functions or a queue.
