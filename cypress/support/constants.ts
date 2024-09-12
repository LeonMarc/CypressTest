export const formDataOptions = {
  name: ["John Doe", "Jane Smith", "Alice Johnson"],
  email: [
    "john.doe@example.com",
    "jane.smith@example.com",
    "alice.johnson@example.com",
  ],
  age: ["30", "25", "35"],
  bio: ["Bio 1", "Bio 2", "Bio 3"],
  street: ["Street 1", "Street 2", "Street 3"],
  city: ["City 1", "City 2", "City 3"],
  zipcode: ["10001", "10002", "10003"],
};

export const errorRequiredFields = {
  requiredField: "This field is required",
};

export const errorMessages = {
  username: "This field is required",
  age: "This field is required",
  email: "This field is required",
  "address.street": "This field is required",
  "address.city": "This field is required",
  "address.zipcode": "This field is required",
  gender: "This field is required",
  accountname: "This field is required",
  storagelimit: "This field is required",
  contactemail: "This field is required",
  accounttype: "This field is required",
};

export const minMaxErrors = {
  minUserName: "Minimum length is 5",
  maxUserName: "Maximum length is 20",
  minAccountName: "Minimum length is 5",
  minAppName: "Minimum length is 3",
};

export const accountDataOptions = {
  accountName: ["Matt Williams", "Lucy Smith", "Roger Gregory"],
  storageLimit: ["123", "456", "789"],
  contactEmail: ["MattW@email.com", "LucyS@email.com", "RogerG@email.com"],
};

export const appDataOptions = {
  appName: ["Earth", "Wind", "Fire"],
  appVersion: ["123", "456", "789"],
  maxUsers: ["1", "12", "578"],
  supportEmail: ["Earth@email.com", "Wind@email.com", "Fire@email.com"],
};

export const featuresDataOptions = {
  configA1: ["Red", "Blue", "Green"],
  configA2: ["Wood", "Metal", "Paper"],
  configB1: ["Fly", "Swim", "Crawl"],
  configB2: ["Jump", "Run", "Walk"],
  configC1: ["Play", "Dance", "Slide"],
  configC2: ["Frozen", "Molten", "Stable"],
};

export const comboboxOptions = {
  environment: ['development', 'staging', 'production'],
  gender: ['male', 'female', 'other'],
  subscription: ['basic', 'premium', 'enterprise']
};