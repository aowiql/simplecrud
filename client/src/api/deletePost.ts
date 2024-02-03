export const deleteBackend = async (
  backUrl: string,
  postId: number
): Promise<void> => {
  const url = `${backUrl}/api/delete/${postId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed delete - ${response.status}`);
    }
  } catch (error) {
    console.error("Error", error);
  }
};
