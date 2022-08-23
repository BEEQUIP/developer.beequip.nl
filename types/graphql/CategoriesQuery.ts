/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoriesQuery
// ====================================================

export interface CategoriesQuery_categoryGroups_categories {
  __typename: "Category";
  id: string;
  name: string;
}

export interface CategoriesQuery_categoryGroups {
  __typename: "CategoryGroup";
  id: string;
  name: string;
  categories: CategoriesQuery_categoryGroups_categories[];
}

export interface CategoriesQuery {
  categoryGroups: CategoriesQuery_categoryGroups[];
}
