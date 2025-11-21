class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  filter() {
    const queryObj = { ...this.queryStr };
    const excludeFields = ["limit", "page", "fields", "sort"];
    excludeFields.forEach((field) => delete queryObj[field]);

    const queryStr = JSON.stringify(queryObj).replace(
      /\b(lt|lte|gt|gte)\b/g,
      (match) => `$${match}`
    );
    this.query = this.query.find({
      isPublished: true,
      ...JSON.parse(queryStr),
    });

    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else this.query = this.query.sort("-publishedAt");

    return this;
  }

  limitFields() {
    if (this.queryStr.fields) {
      const fileds = this.queryStr.fields.split(",").join(" ");
      this.query = this.query.select(fileds);
    } else this.query = this.query.select("-__v");

    return this;
  }
  paginate() {
    const limit = +this.queryStr.limit || 8;
    const page = +this.queryStr.page || 1;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

export default ApiFeatures;
