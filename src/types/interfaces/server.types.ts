import { JWTPayload } from 'jose';

export interface PipelineResult<T> {
  message: string;
  status: number;
  data: T;
}

export interface PipelineProps<T> {
  execFunc: () => Promise<PipelineResult<T>>;
  authenFunc?: () => Promise<PipelineResult<T>>;
}

// Generic type for model fields
export type FilterOperator =
  | 'eq'
  | 'neq'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'contains'
  | 'in'
  | 'between';

// Base filter condition
export interface FilterCondition {
  field: string;
  value: string | number | boolean | null | string[] | number[];
  operator: FilterOperator;
}

// Pagination metadata
export interface PaginationMeta {
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  currentPage: number;
}

// Separate interface for field filters
export type FieldFilters<T> = {
  [K in keyof T]?: {
    value: T[K] | T[K][] | null;
    operator?: FilterOperator;
  };
};

// Logical operators interface
export interface LogicalFilters {
  AND?: FilterCondition[];
  OR?: FilterCondition[];
}

// Combine both filter types
export type Filters<T> = FieldFilters<T> & LogicalFilters;

// Main GetListProps interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface GetListProps<T = any> {
  // Pagination
  pageIndex: number;
  pageSize: number;

  // Sorting
  sortBy?: Array<{
    field: keyof T;
    order: 'asc' | 'desc';
  }>;

  // Global search
  search?: {
    value: string;
    fields?: Array<keyof T>;
  };

  // Combined filters
  filters?: Filters<T>;
}

// Response interface
export interface GetListResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface LoginReq {
  username: string;
  password: string;
}

export interface CreateDepartmentReq {
  name: string;
  detail?: string;
}

export interface CreateRes {
  id: number;
}

export interface DeleteRes {
  id: number;
}

export interface UpdateDepartmentReq {
  name: string;
  detail?: string;
}
export interface UpdateStudentReq {
  name: string;
  dob: string;
  gender: string;
  address: string;
  phone: string;
  departmentId: number;
  classId: number;
}

export interface UpdateRes {
  id: number;
}

export interface SessionPayload extends JWTPayload {
  accountId: number;
  expiresAt: Date;
  role: string;
}

export interface CreateStudentReq {
  name: string;
  avatar?: string;
  dob: string;
  gender: string;
  address: string;
  phone: string;
  departmentId: number;
  classId: number;
}

export interface CreateStudentRes {
  id: number;
}
