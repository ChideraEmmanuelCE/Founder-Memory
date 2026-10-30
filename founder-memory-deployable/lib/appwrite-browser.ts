import { Client, Account, ID } from "appwrite";
export const authConfigured=Boolean(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT&&process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
const client=new Client();
if(authConfigured)client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!).setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
export const account=new Account(client); export {ID};