export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: 'in progress';
};

export const projects: Project[] = [
  {
    slug: 'carnatic-raga-identifier',
    title: 'Carnatic raga identifier for manodharma',
    summary:
      'Manodharma is the improvised part of a Carnatic performance, where the musician explores a raga freely instead of playing a fixed composition. This project listens to a recording of that improvisation and suggests which raga it is, from the notes being used and how the phrases move between them.',
    status: 'in progress',
  },
  {
    slug: 'hinge-harmonium',
    title: 'Hinge harmonium',
    summary:
      'A harmonium you play with your laptop. Opening and closing the lid pumps the bellows, and the keyboard plays the notes, so the hinge does the job the hand-pumped bellows do on the real instrument.',
    status: 'in progress',
  },
  {
    slug: 'coffee-table-book',
    title: 'Coffee table book maker',
    summary:
      'Give it a folder of photos and it lays them out as a printable coffee table book. It groups the photos, picks page layouts, and exports a print-ready file.',
    status: 'in progress',
  },
];
