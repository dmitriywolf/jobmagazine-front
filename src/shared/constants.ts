export const DEBUG = process.env.DEBUG === 'true';
export const API_URL = `${process.env.API_URL}/api`;

export const TOKEN_LOCALSTORAGE_KEY = 'token';

export const ROLES = {
  jobSeeker: 'job-seeker',
  employer: 'employer',
  admin: 'admin',
};
