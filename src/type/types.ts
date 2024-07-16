export interface Task {
  id: number;
  name: string;
  description: string;
  priority: number;
  dateCreated: string;
  completionDate: string;
  teamMembers: string[];
}

export interface User {
  id: number;
  email: string;
  password: string;
  rememberMe: boolean;
}