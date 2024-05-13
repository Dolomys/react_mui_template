import { cleanEnv, str, email, json } from "envalid";

export const env = cleanEnv(import.meta.env, {
  VITE_API_URL: str(),
  VITE_ADMIN_EMAIL: email({ default: "admin@example.com" }),
  EMAIL_CONFIG_JSON: json({ desc: "Additional email parameters" }),
  VITE_ENVIRONMENT: str({ choices: ["development", "test", "production", "staging"] }),
});

// Read an environment variable, which is validated and cleaned during
// and/or filtering that you specified with cleanEnv().
env.VITE_ADMIN_EMAIL; // -> 'admin@example.com'
