interface Posts {
  id: number;
  boardTitle: string;
  boardPost: string;
  boardDone: boolean;
}

export const getPosts = async (backUrl: string): Promise<Posts[]> => {
  try {
    const response = await fetch(`${backUrl}/api/lists`);
    const data: Posts[] = await response.json();

    return data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
