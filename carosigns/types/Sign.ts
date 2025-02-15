export type Deductions = {
  minor?: string[];
  substantial?: string[];
  nq?: string[];
};

export type Sign = {
  signType?: string;
  category?: any;
  name: string;
  icon: NodeRequire;
  title: string;
  levels?: any;
  excludeFromPractice?: boolean;
  hideNameOnGrid?: boolean;
  description?: string;
  tips?: string;
  deductions?: Deductions;
  reward?: boolean;
  practiceNextRestriction?: string[];
  practiceOnlyAfter?: string[];
  changeSide?: boolean;
  limitedCues?: boolean;
};

export type Level = {
  name: string;
  type: string;
  buttonColor?: string;
  icon?: string;
  signs: Sign[];
};
