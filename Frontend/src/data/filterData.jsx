export const filters = [
  {
    id: "job /eIntern",
    name: "Job/Intern",
    options: [
      { value: "job", label: "Job" },
      { value: "intern", label: "Intern" },
    ],
  },
  {
    id: "department",
    name: "Department",
    options: [
      { value: "ece", lable: "ECE" },
      { value: "cs", label: "CS" },
      { value: "it", label: "IT" },
      { value: "ee", label: "EE" },
      { value: "me", label: "ME" },
      { value: "ce", label: "CE" },
      { value: "ai/ml", label: "IT" },
    ],
  },
  {
    id: "work mode",
    name: "Work Mode",
    options: [
      { value: "Work from Office", label: "work from office" },
      { value: "Remote", label: "remote" },
      { value: "Hybrid", label: "hybrid" },
    ],
  },
  {
    id: "duration",
    name: "Duration",
    options: [
      { value: "1 Months", label: "1 months" },
      { value: "2 Months", label: "2 Months" },
      { value: "3 Months", label: "3 Months" },
      { value: "4 Months", label: "4 Months" },
      { value: "5 Months", label: "5 Months" },
      { value: "6 Months", label: "6 Months" },
      { value: "Flexible", label: "flexible" },
    ],
  },
  {
    id: "stipend",
    name: "Stipend",
    options: [
      { value: "Unpaid", label: "unpaid" },
      { value: "0-10k", label: "0-10k" },
      { value: "10k-20k", label: "10k-20k" },
      { value: "20k-30k", label: "20k-30k" },
      { value: "30k-40k", label: "30k-40k" },
      { value: "40k-50k", label: "40k-50k" },
      { value: "50k and above", label: "50k and above" },
    ],
  },
];
