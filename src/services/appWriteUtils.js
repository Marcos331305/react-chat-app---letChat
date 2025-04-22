import { Databases, ID } from "appwrite";

import appwriteClient from "@/services/appWrite";

const databases = new Databases(appwriteClient);

// Function to add user to the 'users' collection
export const addUserToUsersCollection = async (userId, username) => {
  try {
    const response = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
      import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID, // Collection ID
      userId, // Document ID (user ID)
      {
        userId: userId,
        username: username,
      },
    );
    return response;
  } catch (error) {
    console.error("Error adding user to users collection:", error);
    throw new Error(error.message);
  }
};
