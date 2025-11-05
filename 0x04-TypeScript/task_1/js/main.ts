interface Teacher {
  readonly firstName: string;  // Only set at initialization
  readonly lastName: string;   // Only set at initialization
  fullTimeEmployee: boolean;   // Must always exist
  yearsOfExperience?: number;  // Optional
  location: string;            // Must always exist
  [key: string]: any;          // Allow any additional property
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);
