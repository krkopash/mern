import { Model } from "mongoose";
interface PaginationOptions {
  page?: string;
  limit?: string;
  sortBy?: string;
  order?: string;
}

export const paginate = async ( model: Model<any>, query: any, options: PaginationOptions) => {
  const page = parseInt(options.page || "1");
  const limit = parseInt(options.limit || "5");
  const skip = (page - 1) * limit;

  const sortField = options.sortBy || "createdAt";
  const sortOrder = options.order === "asc" ? 1 : -1;
  const total = await model.countDocuments(query);

  const data = await model.find(query).sort({ [sortField]: sortOrder }).skip(skip).limit(limit);

  return {page, limit,total, totalPages: Math.ceil(total / limit), sortBy: sortField, order: sortOrder === 1 ? "asc" : "desc", data,};
};