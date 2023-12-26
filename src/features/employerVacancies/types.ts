interface ICreateVacancy {
  title: string;
  category: string;
  domain: string;
  skills: string;
  workExperience: number;
  experienceLevel: string;
  salaryRange: string;
  country: string;
  city: string;
  englishLevel: string;
  summary: string;
  companyType: string;
  employmentOptions: string;
}

interface IUpdateVacancy extends ICreateVacancy {
  _id: string;
}

export { IUpdateVacancy, ICreateVacancy };
