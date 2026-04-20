export const findDocumentOrThrow = async (Model, id, label) => {
  const document = await Model.findById(id);

  if (!document) {
    const error = new Error(`${label} not found.`);
    error.statusCode = 404;
    throw error;
  }

  return document;
};

