import fs from 'fs';
import path from 'path';

const name = process.argv[2];
if (!name) {
    console.error('Usage: tsx src/generate-migration.ts <name>');
    process.exit(1);
}

const migrationsDir = path.resolve(__dirname, 'migrations');
if (!fs.existsSync(migrationsDir)) fs.mkdirSync(migrationsDir, { recursive: true });

const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
const filename = `${timestamp}-${name}.ts`;
const filepath = path.join(migrationsDir, filename);

const skeleton = `import { QueryInterface } from 'sequelize';

export const up = async ({ context: qi }: { context: QueryInterface }) => {
  // TODO: write migration for ${name}
};

export const down = async ({ context: qi }: { context: QueryInterface }) => {
  // TODO: revert migration for ${name}
};
`;

fs.writeFileSync(filepath, skeleton);
console.log('Created migration:', filepath);
