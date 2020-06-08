/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PublicCreateIntermediaryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: PublicCreateIntermediary
// ====================================================

export interface PublicCreateIntermediary_publicCreateIntermediary_intermediary {
  __typename: "PublicIntermediary";
  cocNumber: string | null;
  createdAt: any;
  id: string;
  name: string;
  token: string | null;
  updatedAt: any;
}

export interface PublicCreateIntermediary_publicCreateIntermediary {
  __typename: "PublicCreateIntermediaryPayload";
  intermediary: PublicCreateIntermediary_publicCreateIntermediary_intermediary | null;
}

export interface PublicCreateIntermediary {
  publicCreateIntermediary: PublicCreateIntermediary_publicCreateIntermediary | null;
}

export interface PublicCreateIntermediaryVariables {
  input?: PublicCreateIntermediaryInput | null;
}
