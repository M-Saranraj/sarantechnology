export type ProjectType = 'Client Project' | 'Professional Project' | 'Personal Project' | 'Academic Project';

export interface ProjectItem {
  slug: string;
  name: string;
  type: ProjectType;
  summary: string;
  description: string;
  technologies: string[];
  url?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'homefix360',
    name: 'HomeFix360',
    type: 'Client Project',
    summary: 'Website for a Chennai home services business, built for customer self-service.',
    description:
      'A website for Homefixy360, a Chennai home-services business offering AC service, washing machine service, plumbing, electrical, painting, waterproofing and more. Built for the client to maintain content themselves, with a no-backend booking flow that opens WhatsApp, SMS or email pre-filled with the enquiry.',
    technologies: ['Angular 21', 'Cloudflare Pages'],
  },
  {
    slug: 'agora',
    name: 'Agora',
    type: 'Professional Project',
    summary: 'A meeting and sprint management platform covering standups, agendas and minutes of meeting.',
    description:
      'A meeting management application handling sprint standups, PMO meetings, requirements reviews, minutes of meeting and task coordination — including AI-assisted features and embedded video conferencing for meetings.',
    technologies: ['Angular', 'Spring Boot', 'Azure OpenAI'],
  },
  {
    slug: 'mindmaster',
    name: 'MindMaster',
    type: 'Personal Project',
    summary: 'A collection of browser-based puzzle games — 15 Puzzle, Minesweeper and Sudoku.',
    description:
      'A Flutter web game collection built as a personal project, bringing together three classic puzzle games in one place.',
    technologies: ['Flutter', 'Dart'],
  },
  {
    slug: 'leaf-disease-prediction',
    name: 'Leaf Disease Prediction',
    type: 'Academic Project',
    summary: 'A deep-learning system that identifies crop leaf disease and recommends fertilizer.',
    description:
      'A college final-year project using deep learning to predict plant leaf disease from images and suggest an appropriate fertilizer response.',
    technologies: ['Deep Learning', 'Python'],
  },
];
