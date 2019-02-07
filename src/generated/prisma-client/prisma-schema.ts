export const typeDefs = /* GraphQL */ `type Account {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  lastSeenAt: DateTime!
  deletedAt: DateTime
  project: Project!
  person: Person!
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String!
  hash: String!
  need_onboarding: Boolean!
  email_validated: Boolean!
  emailConfirmToken: String
}

type AccountConnection {
  pageInfo: PageInfo!
  edges: [AccountEdge]!
  aggregate: AggregateAccount!
}

input AccountCreateInput {
  clientId: ID
  lastSeenAt: DateTime!
  deletedAt: DateTime
  project: ProjectCreateOneWithoutAccountsInput!
  person: PersonCreateOneWithoutAccountInput!
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String!
  hash: String!
  need_onboarding: Boolean
  email_validated: Boolean
  emailConfirmToken: String
}

input AccountCreateManyWithoutProjectInput {
  create: [AccountCreateWithoutProjectInput!]
  connect: [AccountWhereUniqueInput!]
}

input AccountCreateOneWithoutPersonInput {
  create: AccountCreateWithoutPersonInput
  connect: AccountWhereUniqueInput
}

input AccountCreateWithoutPersonInput {
  clientId: ID
  lastSeenAt: DateTime!
  deletedAt: DateTime
  project: ProjectCreateOneWithoutAccountsInput!
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String!
  hash: String!
  need_onboarding: Boolean
  email_validated: Boolean
  emailConfirmToken: String
}

input AccountCreateWithoutProjectInput {
  clientId: ID
  lastSeenAt: DateTime!
  deletedAt: DateTime
  person: PersonCreateOneWithoutAccountInput!
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String!
  hash: String!
  need_onboarding: Boolean
  email_validated: Boolean
  emailConfirmToken: String
}

type AccountEdge {
  node: Account!
  cursor: String!
}

enum AccountOrderByInput {
  id_ASC
  id_DESC
  clientId_ASC
  clientId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  lastSeenAt_ASC
  lastSeenAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  reset_password_token_ASC
  reset_password_token_DESC
  reset_password_exp_date_ASC
  reset_password_exp_date_DESC
  username_ASC
  username_DESC
  hash_ASC
  hash_DESC
  need_onboarding_ASC
  need_onboarding_DESC
  email_validated_ASC
  email_validated_DESC
  emailConfirmToken_ASC
  emailConfirmToken_DESC
}

type AccountPreviousValues {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  lastSeenAt: DateTime!
  deletedAt: DateTime
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String!
  hash: String!
  need_onboarding: Boolean!
  email_validated: Boolean!
  emailConfirmToken: String
}

input AccountScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  lastSeenAt: DateTime
  lastSeenAt_not: DateTime
  lastSeenAt_in: [DateTime!]
  lastSeenAt_not_in: [DateTime!]
  lastSeenAt_lt: DateTime
  lastSeenAt_lte: DateTime
  lastSeenAt_gt: DateTime
  lastSeenAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  reset_password_token: String
  reset_password_token_not: String
  reset_password_token_in: [String!]
  reset_password_token_not_in: [String!]
  reset_password_token_lt: String
  reset_password_token_lte: String
  reset_password_token_gt: String
  reset_password_token_gte: String
  reset_password_token_contains: String
  reset_password_token_not_contains: String
  reset_password_token_starts_with: String
  reset_password_token_not_starts_with: String
  reset_password_token_ends_with: String
  reset_password_token_not_ends_with: String
  reset_password_exp_date: DateTime
  reset_password_exp_date_not: DateTime
  reset_password_exp_date_in: [DateTime!]
  reset_password_exp_date_not_in: [DateTime!]
  reset_password_exp_date_lt: DateTime
  reset_password_exp_date_lte: DateTime
  reset_password_exp_date_gt: DateTime
  reset_password_exp_date_gte: DateTime
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  need_onboarding: Boolean
  need_onboarding_not: Boolean
  email_validated: Boolean
  email_validated_not: Boolean
  emailConfirmToken: String
  emailConfirmToken_not: String
  emailConfirmToken_in: [String!]
  emailConfirmToken_not_in: [String!]
  emailConfirmToken_lt: String
  emailConfirmToken_lte: String
  emailConfirmToken_gt: String
  emailConfirmToken_gte: String
  emailConfirmToken_contains: String
  emailConfirmToken_not_contains: String
  emailConfirmToken_starts_with: String
  emailConfirmToken_not_starts_with: String
  emailConfirmToken_ends_with: String
  emailConfirmToken_not_ends_with: String
  AND: [AccountScalarWhereInput!]
  OR: [AccountScalarWhereInput!]
  NOT: [AccountScalarWhereInput!]
}

type AccountSubscriptionPayload {
  mutation: MutationType!
  node: Account
  updatedFields: [String!]
  previousValues: AccountPreviousValues
}

input AccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccountWhereInput
  AND: [AccountSubscriptionWhereInput!]
  OR: [AccountSubscriptionWhereInput!]
  NOT: [AccountSubscriptionWhereInput!]
}

input AccountUpdateInput {
  clientId: ID
  lastSeenAt: DateTime
  deletedAt: DateTime
  project: ProjectUpdateOneRequiredWithoutAccountsInput
  person: PersonUpdateOneRequiredWithoutAccountInput
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String
  hash: String
  need_onboarding: Boolean
  email_validated: Boolean
  emailConfirmToken: String
}

input AccountUpdateManyDataInput {
  clientId: ID
  lastSeenAt: DateTime
  deletedAt: DateTime
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String
  hash: String
  need_onboarding: Boolean
  email_validated: Boolean
  emailConfirmToken: String
}

input AccountUpdateManyMutationInput {
  clientId: ID
  lastSeenAt: DateTime
  deletedAt: DateTime
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String
  hash: String
  need_onboarding: Boolean
  email_validated: Boolean
  emailConfirmToken: String
}

input AccountUpdateManyWithoutProjectInput {
  create: [AccountCreateWithoutProjectInput!]
  delete: [AccountWhereUniqueInput!]
  connect: [AccountWhereUniqueInput!]
  set: [AccountWhereUniqueInput!]
  disconnect: [AccountWhereUniqueInput!]
  update: [AccountUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [AccountUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [AccountScalarWhereInput!]
  updateMany: [AccountUpdateManyWithWhereNestedInput!]
}

input AccountUpdateManyWithWhereNestedInput {
  where: AccountScalarWhereInput!
  data: AccountUpdateManyDataInput!
}

input AccountUpdateOneWithoutPersonInput {
  create: AccountCreateWithoutPersonInput
  update: AccountUpdateWithoutPersonDataInput
  upsert: AccountUpsertWithoutPersonInput
  delete: Boolean
  disconnect: Boolean
  connect: AccountWhereUniqueInput
}

input AccountUpdateWithoutPersonDataInput {
  clientId: ID
  lastSeenAt: DateTime
  deletedAt: DateTime
  project: ProjectUpdateOneRequiredWithoutAccountsInput
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String
  hash: String
  need_onboarding: Boolean
  email_validated: Boolean
  emailConfirmToken: String
}

input AccountUpdateWithoutProjectDataInput {
  clientId: ID
  lastSeenAt: DateTime
  deletedAt: DateTime
  person: PersonUpdateOneRequiredWithoutAccountInput
  reset_password_token: String
  reset_password_exp_date: DateTime
  username: String
  hash: String
  need_onboarding: Boolean
  email_validated: Boolean
  emailConfirmToken: String
}

input AccountUpdateWithWhereUniqueWithoutProjectInput {
  where: AccountWhereUniqueInput!
  data: AccountUpdateWithoutProjectDataInput!
}

input AccountUpsertWithoutPersonInput {
  update: AccountUpdateWithoutPersonDataInput!
  create: AccountCreateWithoutPersonInput!
}

input AccountUpsertWithWhereUniqueWithoutProjectInput {
  where: AccountWhereUniqueInput!
  update: AccountUpdateWithoutProjectDataInput!
  create: AccountCreateWithoutProjectInput!
}

input AccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  lastSeenAt: DateTime
  lastSeenAt_not: DateTime
  lastSeenAt_in: [DateTime!]
  lastSeenAt_not_in: [DateTime!]
  lastSeenAt_lt: DateTime
  lastSeenAt_lte: DateTime
  lastSeenAt_gt: DateTime
  lastSeenAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  project: ProjectWhereInput
  person: PersonWhereInput
  reset_password_token: String
  reset_password_token_not: String
  reset_password_token_in: [String!]
  reset_password_token_not_in: [String!]
  reset_password_token_lt: String
  reset_password_token_lte: String
  reset_password_token_gt: String
  reset_password_token_gte: String
  reset_password_token_contains: String
  reset_password_token_not_contains: String
  reset_password_token_starts_with: String
  reset_password_token_not_starts_with: String
  reset_password_token_ends_with: String
  reset_password_token_not_ends_with: String
  reset_password_exp_date: DateTime
  reset_password_exp_date_not: DateTime
  reset_password_exp_date_in: [DateTime!]
  reset_password_exp_date_not_in: [DateTime!]
  reset_password_exp_date_lt: DateTime
  reset_password_exp_date_lte: DateTime
  reset_password_exp_date_gt: DateTime
  reset_password_exp_date_gte: DateTime
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  need_onboarding: Boolean
  need_onboarding_not: Boolean
  email_validated: Boolean
  email_validated_not: Boolean
  emailConfirmToken: String
  emailConfirmToken_not: String
  emailConfirmToken_in: [String!]
  emailConfirmToken_not_in: [String!]
  emailConfirmToken_lt: String
  emailConfirmToken_lte: String
  emailConfirmToken_gt: String
  emailConfirmToken_gte: String
  emailConfirmToken_contains: String
  emailConfirmToken_not_contains: String
  emailConfirmToken_starts_with: String
  emailConfirmToken_not_starts_with: String
  emailConfirmToken_ends_with: String
  emailConfirmToken_not_ends_with: String
  AND: [AccountWhereInput!]
  OR: [AccountWhereInput!]
  NOT: [AccountWhereInput!]
}

input AccountWhereUniqueInput {
  id: ID
  clientId: ID
  username: String
}

type AggregateAccount {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregatePerson {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateProjectRight {
  count: Int!
}

type AggregateSubmessage {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum CHANNEL {
  NOTE
  INTERCOM
  MAIL
  SLACK
  ZENDESK
  SHEET
  FORM
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  receivedAt: DateTime
  _projectId: ID
  project: Project!
  sub_messages(where: SubmessageWhereInput, orderBy: SubmessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Submessage!]
  submitter: Person!
  requester: Person
  ccs(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person!]
  integration_url: String
  integration_id: String
  title: String!
  content: String!
  channel: CHANNEL!
  read: Boolean!
  updated: Boolean!
  archived: Boolean!
  processed: Boolean!
}

enum MESSAGE_TYPE {
  NOTE
  MESSAGE
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectCreateOneWithoutMessagesInput!
  sub_messages: SubmessageCreateManyWithoutMessageInput
  submitter: PersonCreateOneWithoutSubmitted_messagesInput!
  requester: PersonCreateOneWithoutRequested_messagesInput
  ccs: PersonCreateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageCreateManyWithoutCcsInput {
  create: [MessageCreateWithoutCcsInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutProjectInput {
  create: [MessageCreateWithoutProjectInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutRequesterInput {
  create: [MessageCreateWithoutRequesterInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutSubmitterInput {
  create: [MessageCreateWithoutSubmitterInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateOneWithoutSub_messagesInput {
  create: MessageCreateWithoutSub_messagesInput
  connect: MessageWhereUniqueInput
}

input MessageCreateWithoutCcsInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectCreateOneWithoutMessagesInput!
  sub_messages: SubmessageCreateManyWithoutMessageInput
  submitter: PersonCreateOneWithoutSubmitted_messagesInput!
  requester: PersonCreateOneWithoutRequested_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageCreateWithoutProjectInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  sub_messages: SubmessageCreateManyWithoutMessageInput
  submitter: PersonCreateOneWithoutSubmitted_messagesInput!
  requester: PersonCreateOneWithoutRequested_messagesInput
  ccs: PersonCreateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageCreateWithoutRequesterInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectCreateOneWithoutMessagesInput!
  sub_messages: SubmessageCreateManyWithoutMessageInput
  submitter: PersonCreateOneWithoutSubmitted_messagesInput!
  ccs: PersonCreateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageCreateWithoutSub_messagesInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectCreateOneWithoutMessagesInput!
  submitter: PersonCreateOneWithoutSubmitted_messagesInput!
  requester: PersonCreateOneWithoutRequested_messagesInput
  ccs: PersonCreateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageCreateWithoutSubmitterInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectCreateOneWithoutMessagesInput!
  sub_messages: SubmessageCreateManyWithoutMessageInput
  requester: PersonCreateOneWithoutRequested_messagesInput
  ccs: PersonCreateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  clientId_ASC
  clientId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  receivedAt_ASC
  receivedAt_DESC
  _projectId_ASC
  _projectId_DESC
  integration_url_ASC
  integration_url_DESC
  integration_id_ASC
  integration_id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  channel_ASC
  channel_DESC
  read_ASC
  read_DESC
  updated_ASC
  updated_DESC
  archived_ASC
  archived_DESC
  processed_ASC
  processed_DESC
}

type MessagePreviousValues {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  receivedAt: DateTime
  _projectId: ID
  integration_url: String
  integration_id: String
  title: String!
  content: String!
  channel: CHANNEL!
  read: Boolean!
  updated: Boolean!
  archived: Boolean!
  processed: Boolean!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  receivedAt: DateTime
  receivedAt_not: DateTime
  receivedAt_in: [DateTime!]
  receivedAt_not_in: [DateTime!]
  receivedAt_lt: DateTime
  receivedAt_lte: DateTime
  receivedAt_gt: DateTime
  receivedAt_gte: DateTime
  _projectId: ID
  _projectId_not: ID
  _projectId_in: [ID!]
  _projectId_not_in: [ID!]
  _projectId_lt: ID
  _projectId_lte: ID
  _projectId_gt: ID
  _projectId_gte: ID
  _projectId_contains: ID
  _projectId_not_contains: ID
  _projectId_starts_with: ID
  _projectId_not_starts_with: ID
  _projectId_ends_with: ID
  _projectId_not_ends_with: ID
  integration_url: String
  integration_url_not: String
  integration_url_in: [String!]
  integration_url_not_in: [String!]
  integration_url_lt: String
  integration_url_lte: String
  integration_url_gt: String
  integration_url_gte: String
  integration_url_contains: String
  integration_url_not_contains: String
  integration_url_starts_with: String
  integration_url_not_starts_with: String
  integration_url_ends_with: String
  integration_url_not_ends_with: String
  integration_id: String
  integration_id_not: String
  integration_id_in: [String!]
  integration_id_not_in: [String!]
  integration_id_lt: String
  integration_id_lte: String
  integration_id_gt: String
  integration_id_gte: String
  integration_id_contains: String
  integration_id_not_contains: String
  integration_id_starts_with: String
  integration_id_not_starts_with: String
  integration_id_ends_with: String
  integration_id_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  channel: CHANNEL
  channel_not: CHANNEL
  channel_in: [CHANNEL!]
  channel_not_in: [CHANNEL!]
  read: Boolean
  read_not: Boolean
  updated: Boolean
  updated_not: Boolean
  archived: Boolean
  archived_not: Boolean
  processed: Boolean
  processed_not: Boolean
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutMessagesInput
  sub_messages: SubmessageUpdateManyWithoutMessageInput
  submitter: PersonUpdateOneRequiredWithoutSubmitted_messagesInput
  requester: PersonUpdateOneWithoutRequested_messagesInput
  ccs: PersonUpdateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageUpdateManyDataInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageUpdateManyMutationInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageUpdateManyWithoutCcsInput {
  create: [MessageCreateWithoutCcsInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutCcsInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutCcsInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutProjectInput {
  create: [MessageCreateWithoutProjectInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutRequesterInput {
  create: [MessageCreateWithoutRequesterInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutRequesterInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutRequesterInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutSubmitterInput {
  create: [MessageCreateWithoutSubmitterInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutSubmitterInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutSubmitterInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateOneRequiredWithoutSub_messagesInput {
  create: MessageCreateWithoutSub_messagesInput
  update: MessageUpdateWithoutSub_messagesDataInput
  upsert: MessageUpsertWithoutSub_messagesInput
  connect: MessageWhereUniqueInput
}

input MessageUpdateWithoutCcsDataInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutMessagesInput
  sub_messages: SubmessageUpdateManyWithoutMessageInput
  submitter: PersonUpdateOneRequiredWithoutSubmitted_messagesInput
  requester: PersonUpdateOneWithoutRequested_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageUpdateWithoutProjectDataInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  sub_messages: SubmessageUpdateManyWithoutMessageInput
  submitter: PersonUpdateOneRequiredWithoutSubmitted_messagesInput
  requester: PersonUpdateOneWithoutRequested_messagesInput
  ccs: PersonUpdateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageUpdateWithoutRequesterDataInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutMessagesInput
  sub_messages: SubmessageUpdateManyWithoutMessageInput
  submitter: PersonUpdateOneRequiredWithoutSubmitted_messagesInput
  ccs: PersonUpdateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageUpdateWithoutSub_messagesDataInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutMessagesInput
  submitter: PersonUpdateOneRequiredWithoutSubmitted_messagesInput
  requester: PersonUpdateOneWithoutRequested_messagesInput
  ccs: PersonUpdateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageUpdateWithoutSubmitterDataInput {
  clientId: ID
  receivedAt: DateTime
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutMessagesInput
  sub_messages: SubmessageUpdateManyWithoutMessageInput
  requester: PersonUpdateOneWithoutRequested_messagesInput
  ccs: PersonUpdateManyWithoutCc_messagesInput
  integration_url: String
  integration_id: String
  title: String
  content: String
  channel: CHANNEL
  read: Boolean
  updated: Boolean
  archived: Boolean
  processed: Boolean
}

input MessageUpdateWithWhereUniqueWithoutCcsInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutCcsDataInput!
}

input MessageUpdateWithWhereUniqueWithoutProjectInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutProjectDataInput!
}

input MessageUpdateWithWhereUniqueWithoutRequesterInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutRequesterDataInput!
}

input MessageUpdateWithWhereUniqueWithoutSubmitterInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutSubmitterDataInput!
}

input MessageUpsertWithoutSub_messagesInput {
  update: MessageUpdateWithoutSub_messagesDataInput!
  create: MessageCreateWithoutSub_messagesInput!
}

input MessageUpsertWithWhereUniqueWithoutCcsInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutCcsDataInput!
  create: MessageCreateWithoutCcsInput!
}

input MessageUpsertWithWhereUniqueWithoutProjectInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutProjectDataInput!
  create: MessageCreateWithoutProjectInput!
}

input MessageUpsertWithWhereUniqueWithoutRequesterInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutRequesterDataInput!
  create: MessageCreateWithoutRequesterInput!
}

input MessageUpsertWithWhereUniqueWithoutSubmitterInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutSubmitterDataInput!
  create: MessageCreateWithoutSubmitterInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  receivedAt: DateTime
  receivedAt_not: DateTime
  receivedAt_in: [DateTime!]
  receivedAt_not_in: [DateTime!]
  receivedAt_lt: DateTime
  receivedAt_lte: DateTime
  receivedAt_gt: DateTime
  receivedAt_gte: DateTime
  _projectId: ID
  _projectId_not: ID
  _projectId_in: [ID!]
  _projectId_not_in: [ID!]
  _projectId_lt: ID
  _projectId_lte: ID
  _projectId_gt: ID
  _projectId_gte: ID
  _projectId_contains: ID
  _projectId_not_contains: ID
  _projectId_starts_with: ID
  _projectId_not_starts_with: ID
  _projectId_ends_with: ID
  _projectId_not_ends_with: ID
  project: ProjectWhereInput
  sub_messages_every: SubmessageWhereInput
  sub_messages_some: SubmessageWhereInput
  sub_messages_none: SubmessageWhereInput
  submitter: PersonWhereInput
  requester: PersonWhereInput
  ccs_every: PersonWhereInput
  ccs_some: PersonWhereInput
  ccs_none: PersonWhereInput
  integration_url: String
  integration_url_not: String
  integration_url_in: [String!]
  integration_url_not_in: [String!]
  integration_url_lt: String
  integration_url_lte: String
  integration_url_gt: String
  integration_url_gte: String
  integration_url_contains: String
  integration_url_not_contains: String
  integration_url_starts_with: String
  integration_url_not_starts_with: String
  integration_url_ends_with: String
  integration_url_not_ends_with: String
  integration_id: String
  integration_id_not: String
  integration_id_in: [String!]
  integration_id_not_in: [String!]
  integration_id_lt: String
  integration_id_lte: String
  integration_id_gt: String
  integration_id_gte: String
  integration_id_contains: String
  integration_id_not_contains: String
  integration_id_starts_with: String
  integration_id_not_starts_with: String
  integration_id_ends_with: String
  integration_id_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  channel: CHANNEL
  channel_not: CHANNEL
  channel_in: [CHANNEL!]
  channel_not_in: [CHANNEL!]
  read: Boolean
  read_not: Boolean
  updated: Boolean
  updated_not: Boolean
  archived: Boolean
  archived_not: Boolean
  processed: Boolean
  processed_not: Boolean
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
  clientId: ID
}

type Mutation {
  createAccount(data: AccountCreateInput!): Account!
  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
  updateManyAccounts(data: AccountUpdateManyMutationInput!, where: AccountWhereInput): BatchPayload!
  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!
  deleteAccount(where: AccountWhereUniqueInput!): Account
  deleteManyAccounts(where: AccountWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createPerson(data: PersonCreateInput!): Person!
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateManyPersons(data: PersonUpdateManyMutationInput!, where: PersonWhereInput): BatchPayload!
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createProjectRight(data: ProjectRightCreateInput!): ProjectRight!
  updateManyProjectRights(data: ProjectRightUpdateManyMutationInput!, where: ProjectRightWhereInput): BatchPayload!
  deleteManyProjectRights(where: ProjectRightWhereInput): BatchPayload!
  createSubmessage(data: SubmessageCreateInput!): Submessage!
  updateSubmessage(data: SubmessageUpdateInput!, where: SubmessageWhereUniqueInput!): Submessage
  updateManySubmessages(data: SubmessageUpdateManyMutationInput!, where: SubmessageWhereInput): BatchPayload!
  upsertSubmessage(where: SubmessageWhereUniqueInput!, create: SubmessageCreateInput!, update: SubmessageUpdateInput!): Submessage!
  deleteSubmessage(where: SubmessageWhereUniqueInput!): Submessage
  deleteManySubmessages(where: SubmessageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Person {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  _projectId: ID
  project: Project!
  right: ProjectRight
  submitted_messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  requested_messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  cc_messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  account: Account
  deleted: Boolean!
  type: PERSON_TYPE!
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

enum PERSON_TYPE {
  COLLABORATOR
  CUSTOMER
}

type PersonConnection {
  pageInfo: PageInfo!
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateInput {
  clientId: ID
  _projectId: ID
  project: ProjectCreateOneWithoutPersonsInput!
  right: ProjectRightCreateOneWithoutPersonInput
  submitted_messages: MessageCreateManyWithoutSubmitterInput
  requested_messages: MessageCreateManyWithoutRequesterInput
  cc_messages: MessageCreateManyWithoutCcsInput
  account: AccountCreateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonCreateManyWithoutCc_messagesInput {
  create: [PersonCreateWithoutCc_messagesInput!]
  connect: [PersonWhereUniqueInput!]
}

input PersonCreateManyWithoutProjectInput {
  create: [PersonCreateWithoutProjectInput!]
  connect: [PersonWhereUniqueInput!]
}

input PersonCreateOneInput {
  create: PersonCreateInput
  connect: PersonWhereUniqueInput
}

input PersonCreateOneWithoutAccountInput {
  create: PersonCreateWithoutAccountInput
  connect: PersonWhereUniqueInput
}

input PersonCreateOneWithoutRequested_messagesInput {
  create: PersonCreateWithoutRequested_messagesInput
  connect: PersonWhereUniqueInput
}

input PersonCreateOneWithoutRightInput {
  create: PersonCreateWithoutRightInput
  connect: PersonWhereUniqueInput
}

input PersonCreateOneWithoutSubmitted_messagesInput {
  create: PersonCreateWithoutSubmitted_messagesInput
  connect: PersonWhereUniqueInput
}

input PersonCreateWithoutAccountInput {
  clientId: ID
  _projectId: ID
  project: ProjectCreateOneWithoutPersonsInput!
  right: ProjectRightCreateOneWithoutPersonInput
  submitted_messages: MessageCreateManyWithoutSubmitterInput
  requested_messages: MessageCreateManyWithoutRequesterInput
  cc_messages: MessageCreateManyWithoutCcsInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonCreateWithoutCc_messagesInput {
  clientId: ID
  _projectId: ID
  project: ProjectCreateOneWithoutPersonsInput!
  right: ProjectRightCreateOneWithoutPersonInput
  submitted_messages: MessageCreateManyWithoutSubmitterInput
  requested_messages: MessageCreateManyWithoutRequesterInput
  account: AccountCreateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonCreateWithoutProjectInput {
  clientId: ID
  _projectId: ID
  right: ProjectRightCreateOneWithoutPersonInput
  submitted_messages: MessageCreateManyWithoutSubmitterInput
  requested_messages: MessageCreateManyWithoutRequesterInput
  cc_messages: MessageCreateManyWithoutCcsInput
  account: AccountCreateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonCreateWithoutRequested_messagesInput {
  clientId: ID
  _projectId: ID
  project: ProjectCreateOneWithoutPersonsInput!
  right: ProjectRightCreateOneWithoutPersonInput
  submitted_messages: MessageCreateManyWithoutSubmitterInput
  cc_messages: MessageCreateManyWithoutCcsInput
  account: AccountCreateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonCreateWithoutRightInput {
  clientId: ID
  _projectId: ID
  project: ProjectCreateOneWithoutPersonsInput!
  submitted_messages: MessageCreateManyWithoutSubmitterInput
  requested_messages: MessageCreateManyWithoutRequesterInput
  cc_messages: MessageCreateManyWithoutCcsInput
  account: AccountCreateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonCreateWithoutSubmitted_messagesInput {
  clientId: ID
  _projectId: ID
  project: ProjectCreateOneWithoutPersonsInput!
  right: ProjectRightCreateOneWithoutPersonInput
  requested_messages: MessageCreateManyWithoutRequesterInput
  cc_messages: MessageCreateManyWithoutCcsInput
  account: AccountCreateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

type PersonEdge {
  node: Person!
  cursor: String!
}

enum PersonOrderByInput {
  id_ASC
  id_DESC
  clientId_ASC
  clientId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  _projectId_ASC
  _projectId_DESC
  deleted_ASC
  deleted_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  details_ASC
  details_DESC
  phone_ASC
  phone_DESC
  zendesk_url_ASC
  zendesk_url_DESC
}

type PersonPreviousValues {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  _projectId: ID
  deleted: Boolean!
  type: PERSON_TYPE!
  name: String!
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  _projectId: ID
  _projectId_not: ID
  _projectId_in: [ID!]
  _projectId_not_in: [ID!]
  _projectId_lt: ID
  _projectId_lte: ID
  _projectId_gt: ID
  _projectId_gte: ID
  _projectId_contains: ID
  _projectId_not_contains: ID
  _projectId_starts_with: ID
  _projectId_not_starts_with: ID
  _projectId_ends_with: ID
  _projectId_not_ends_with: ID
  deleted: Boolean
  deleted_not: Boolean
  type: PERSON_TYPE
  type_not: PERSON_TYPE
  type_in: [PERSON_TYPE!]
  type_not_in: [PERSON_TYPE!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  details: String
  details_not: String
  details_in: [String!]
  details_not_in: [String!]
  details_lt: String
  details_lte: String
  details_gt: String
  details_gte: String
  details_contains: String
  details_not_contains: String
  details_starts_with: String
  details_not_starts_with: String
  details_ends_with: String
  details_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  zendesk_url: String
  zendesk_url_not: String
  zendesk_url_in: [String!]
  zendesk_url_not_in: [String!]
  zendesk_url_lt: String
  zendesk_url_lte: String
  zendesk_url_gt: String
  zendesk_url_gte: String
  zendesk_url_contains: String
  zendesk_url_not_contains: String
  zendesk_url_starts_with: String
  zendesk_url_not_starts_with: String
  zendesk_url_ends_with: String
  zendesk_url_not_ends_with: String
  AND: [PersonScalarWhereInput!]
  OR: [PersonScalarWhereInput!]
  NOT: [PersonScalarWhereInput!]
}

type PersonSubscriptionPayload {
  mutation: MutationType!
  node: Person
  updatedFields: [String!]
  previousValues: PersonPreviousValues
}

input PersonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PersonWhereInput
  AND: [PersonSubscriptionWhereInput!]
  OR: [PersonSubscriptionWhereInput!]
  NOT: [PersonSubscriptionWhereInput!]
}

input PersonUpdateDataInput {
  clientId: ID
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutPersonsInput
  right: ProjectRightUpdateOneWithoutPersonInput
  submitted_messages: MessageUpdateManyWithoutSubmitterInput
  requested_messages: MessageUpdateManyWithoutRequesterInput
  cc_messages: MessageUpdateManyWithoutCcsInput
  account: AccountUpdateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateInput {
  clientId: ID
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutPersonsInput
  right: ProjectRightUpdateOneWithoutPersonInput
  submitted_messages: MessageUpdateManyWithoutSubmitterInput
  requested_messages: MessageUpdateManyWithoutRequesterInput
  cc_messages: MessageUpdateManyWithoutCcsInput
  account: AccountUpdateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateManyDataInput {
  clientId: ID
  _projectId: ID
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateManyMutationInput {
  clientId: ID
  _projectId: ID
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateManyWithoutCc_messagesInput {
  create: [PersonCreateWithoutCc_messagesInput!]
  delete: [PersonWhereUniqueInput!]
  connect: [PersonWhereUniqueInput!]
  set: [PersonWhereUniqueInput!]
  disconnect: [PersonWhereUniqueInput!]
  update: [PersonUpdateWithWhereUniqueWithoutCc_messagesInput!]
  upsert: [PersonUpsertWithWhereUniqueWithoutCc_messagesInput!]
  deleteMany: [PersonScalarWhereInput!]
  updateMany: [PersonUpdateManyWithWhereNestedInput!]
}

input PersonUpdateManyWithoutProjectInput {
  create: [PersonCreateWithoutProjectInput!]
  delete: [PersonWhereUniqueInput!]
  connect: [PersonWhereUniqueInput!]
  set: [PersonWhereUniqueInput!]
  disconnect: [PersonWhereUniqueInput!]
  update: [PersonUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [PersonUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [PersonScalarWhereInput!]
  updateMany: [PersonUpdateManyWithWhereNestedInput!]
}

input PersonUpdateManyWithWhereNestedInput {
  where: PersonScalarWhereInput!
  data: PersonUpdateManyDataInput!
}

input PersonUpdateOneRequiredInput {
  create: PersonCreateInput
  update: PersonUpdateDataInput
  upsert: PersonUpsertNestedInput
  connect: PersonWhereUniqueInput
}

input PersonUpdateOneRequiredWithoutAccountInput {
  create: PersonCreateWithoutAccountInput
  update: PersonUpdateWithoutAccountDataInput
  upsert: PersonUpsertWithoutAccountInput
  connect: PersonWhereUniqueInput
}

input PersonUpdateOneRequiredWithoutSubmitted_messagesInput {
  create: PersonCreateWithoutSubmitted_messagesInput
  update: PersonUpdateWithoutSubmitted_messagesDataInput
  upsert: PersonUpsertWithoutSubmitted_messagesInput
  connect: PersonWhereUniqueInput
}

input PersonUpdateOneWithoutRequested_messagesInput {
  create: PersonCreateWithoutRequested_messagesInput
  update: PersonUpdateWithoutRequested_messagesDataInput
  upsert: PersonUpsertWithoutRequested_messagesInput
  delete: Boolean
  disconnect: Boolean
  connect: PersonWhereUniqueInput
}

input PersonUpdateWithoutAccountDataInput {
  clientId: ID
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutPersonsInput
  right: ProjectRightUpdateOneWithoutPersonInput
  submitted_messages: MessageUpdateManyWithoutSubmitterInput
  requested_messages: MessageUpdateManyWithoutRequesterInput
  cc_messages: MessageUpdateManyWithoutCcsInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateWithoutCc_messagesDataInput {
  clientId: ID
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutPersonsInput
  right: ProjectRightUpdateOneWithoutPersonInput
  submitted_messages: MessageUpdateManyWithoutSubmitterInput
  requested_messages: MessageUpdateManyWithoutRequesterInput
  account: AccountUpdateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateWithoutProjectDataInput {
  clientId: ID
  _projectId: ID
  right: ProjectRightUpdateOneWithoutPersonInput
  submitted_messages: MessageUpdateManyWithoutSubmitterInput
  requested_messages: MessageUpdateManyWithoutRequesterInput
  cc_messages: MessageUpdateManyWithoutCcsInput
  account: AccountUpdateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateWithoutRequested_messagesDataInput {
  clientId: ID
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutPersonsInput
  right: ProjectRightUpdateOneWithoutPersonInput
  submitted_messages: MessageUpdateManyWithoutSubmitterInput
  cc_messages: MessageUpdateManyWithoutCcsInput
  account: AccountUpdateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateWithoutSubmitted_messagesDataInput {
  clientId: ID
  _projectId: ID
  project: ProjectUpdateOneRequiredWithoutPersonsInput
  right: ProjectRightUpdateOneWithoutPersonInput
  requested_messages: MessageUpdateManyWithoutRequesterInput
  cc_messages: MessageUpdateManyWithoutCcsInput
  account: AccountUpdateOneWithoutPersonInput
  deleted: Boolean
  type: PERSON_TYPE
  name: String
  email: String
  details: String
  phone: String
  zendesk_url: String
}

input PersonUpdateWithWhereUniqueWithoutCc_messagesInput {
  where: PersonWhereUniqueInput!
  data: PersonUpdateWithoutCc_messagesDataInput!
}

input PersonUpdateWithWhereUniqueWithoutProjectInput {
  where: PersonWhereUniqueInput!
  data: PersonUpdateWithoutProjectDataInput!
}

input PersonUpsertNestedInput {
  update: PersonUpdateDataInput!
  create: PersonCreateInput!
}

input PersonUpsertWithoutAccountInput {
  update: PersonUpdateWithoutAccountDataInput!
  create: PersonCreateWithoutAccountInput!
}

input PersonUpsertWithoutRequested_messagesInput {
  update: PersonUpdateWithoutRequested_messagesDataInput!
  create: PersonCreateWithoutRequested_messagesInput!
}

input PersonUpsertWithoutSubmitted_messagesInput {
  update: PersonUpdateWithoutSubmitted_messagesDataInput!
  create: PersonCreateWithoutSubmitted_messagesInput!
}

input PersonUpsertWithWhereUniqueWithoutCc_messagesInput {
  where: PersonWhereUniqueInput!
  update: PersonUpdateWithoutCc_messagesDataInput!
  create: PersonCreateWithoutCc_messagesInput!
}

input PersonUpsertWithWhereUniqueWithoutProjectInput {
  where: PersonWhereUniqueInput!
  update: PersonUpdateWithoutProjectDataInput!
  create: PersonCreateWithoutProjectInput!
}

input PersonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  _projectId: ID
  _projectId_not: ID
  _projectId_in: [ID!]
  _projectId_not_in: [ID!]
  _projectId_lt: ID
  _projectId_lte: ID
  _projectId_gt: ID
  _projectId_gte: ID
  _projectId_contains: ID
  _projectId_not_contains: ID
  _projectId_starts_with: ID
  _projectId_not_starts_with: ID
  _projectId_ends_with: ID
  _projectId_not_ends_with: ID
  project: ProjectWhereInput
  right: ProjectRightWhereInput
  submitted_messages_every: MessageWhereInput
  submitted_messages_some: MessageWhereInput
  submitted_messages_none: MessageWhereInput
  requested_messages_every: MessageWhereInput
  requested_messages_some: MessageWhereInput
  requested_messages_none: MessageWhereInput
  cc_messages_every: MessageWhereInput
  cc_messages_some: MessageWhereInput
  cc_messages_none: MessageWhereInput
  account: AccountWhereInput
  deleted: Boolean
  deleted_not: Boolean
  type: PERSON_TYPE
  type_not: PERSON_TYPE
  type_in: [PERSON_TYPE!]
  type_not_in: [PERSON_TYPE!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  details: String
  details_not: String
  details_in: [String!]
  details_not_in: [String!]
  details_lt: String
  details_lte: String
  details_gt: String
  details_gte: String
  details_contains: String
  details_not_contains: String
  details_starts_with: String
  details_not_starts_with: String
  details_ends_with: String
  details_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  zendesk_url: String
  zendesk_url_not: String
  zendesk_url_in: [String!]
  zendesk_url_not_in: [String!]
  zendesk_url_lt: String
  zendesk_url_lte: String
  zendesk_url_gt: String
  zendesk_url_gte: String
  zendesk_url_contains: String
  zendesk_url_not_contains: String
  zendesk_url_starts_with: String
  zendesk_url_not_starts_with: String
  zendesk_url_ends_with: String
  zendesk_url_not_ends_with: String
  AND: [PersonWhereInput!]
  OR: [PersonWhereInput!]
  NOT: [PersonWhereInput!]
}

input PersonWhereUniqueInput {
  id: ID
  clientId: ID
}

type Project {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person!]
  name: String!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  clientId: ID
  accounts: AccountCreateManyWithoutProjectInput
  messages: MessageCreateManyWithoutProjectInput
  persons: PersonCreateManyWithoutProjectInput
  name: String!
}

input ProjectCreateOneInput {
  create: ProjectCreateInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateOneWithoutAccountsInput {
  create: ProjectCreateWithoutAccountsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateOneWithoutMessagesInput {
  create: ProjectCreateWithoutMessagesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateOneWithoutPersonsInput {
  create: ProjectCreateWithoutPersonsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutAccountsInput {
  clientId: ID
  messages: MessageCreateManyWithoutProjectInput
  persons: PersonCreateManyWithoutProjectInput
  name: String!
}

input ProjectCreateWithoutMessagesInput {
  clientId: ID
  accounts: AccountCreateManyWithoutProjectInput
  persons: PersonCreateManyWithoutProjectInput
  name: String!
}

input ProjectCreateWithoutPersonsInput {
  clientId: ID
  accounts: AccountCreateManyWithoutProjectInput
  messages: MessageCreateManyWithoutProjectInput
  name: String!
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  clientId_ASC
  clientId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type ProjectPreviousValues {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type ProjectRight {
  project: Project!
  right: RIGHT!
  person: Person
}

type ProjectRightConnection {
  pageInfo: PageInfo!
  edges: [ProjectRightEdge]!
  aggregate: AggregateProjectRight!
}

input ProjectRightCreateInput {
  project: ProjectCreateOneInput!
  right: RIGHT!
  person: PersonCreateOneWithoutRightInput
}

input ProjectRightCreateOneWithoutPersonInput {
  create: ProjectRightCreateWithoutPersonInput
}

input ProjectRightCreateWithoutPersonInput {
  project: ProjectCreateOneInput!
  right: RIGHT!
}

type ProjectRightEdge {
  node: ProjectRight!
  cursor: String!
}

enum ProjectRightOrderByInput {
  right_ASC
  right_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectRightPreviousValues {
  right: RIGHT!
}

type ProjectRightSubscriptionPayload {
  mutation: MutationType!
  node: ProjectRight
  updatedFields: [String!]
  previousValues: ProjectRightPreviousValues
}

input ProjectRightSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectRightWhereInput
  AND: [ProjectRightSubscriptionWhereInput!]
  OR: [ProjectRightSubscriptionWhereInput!]
  NOT: [ProjectRightSubscriptionWhereInput!]
}

input ProjectRightUpdateManyMutationInput {
  right: RIGHT
}

input ProjectRightUpdateOneWithoutPersonInput {
  create: ProjectRightCreateWithoutPersonInput
  update: ProjectRightUpdateWithoutPersonDataInput
  upsert: ProjectRightUpsertWithoutPersonInput
  delete: Boolean
  disconnect: Boolean
}

input ProjectRightUpdateWithoutPersonDataInput {
  project: ProjectUpdateOneRequiredInput
  right: RIGHT
}

input ProjectRightUpsertWithoutPersonInput {
  update: ProjectRightUpdateWithoutPersonDataInput!
  create: ProjectRightCreateWithoutPersonInput!
}

input ProjectRightWhereInput {
  project: ProjectWhereInput
  right: RIGHT
  right_not: RIGHT
  right_in: [RIGHT!]
  right_not_in: [RIGHT!]
  person: PersonWhereInput
  AND: [ProjectRightWhereInput!]
  OR: [ProjectRightWhereInput!]
  NOT: [ProjectRightWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateDataInput {
  clientId: ID
  accounts: AccountUpdateManyWithoutProjectInput
  messages: MessageUpdateManyWithoutProjectInput
  persons: PersonUpdateManyWithoutProjectInput
  name: String
}

input ProjectUpdateInput {
  clientId: ID
  accounts: AccountUpdateManyWithoutProjectInput
  messages: MessageUpdateManyWithoutProjectInput
  persons: PersonUpdateManyWithoutProjectInput
  name: String
}

input ProjectUpdateManyMutationInput {
  clientId: ID
  name: String
}

input ProjectUpdateOneRequiredInput {
  create: ProjectCreateInput
  update: ProjectUpdateDataInput
  upsert: ProjectUpsertNestedInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateOneRequiredWithoutAccountsInput {
  create: ProjectCreateWithoutAccountsInput
  update: ProjectUpdateWithoutAccountsDataInput
  upsert: ProjectUpsertWithoutAccountsInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateOneRequiredWithoutMessagesInput {
  create: ProjectCreateWithoutMessagesInput
  update: ProjectUpdateWithoutMessagesDataInput
  upsert: ProjectUpsertWithoutMessagesInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateOneRequiredWithoutPersonsInput {
  create: ProjectCreateWithoutPersonsInput
  update: ProjectUpdateWithoutPersonsDataInput
  upsert: ProjectUpsertWithoutPersonsInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutAccountsDataInput {
  clientId: ID
  messages: MessageUpdateManyWithoutProjectInput
  persons: PersonUpdateManyWithoutProjectInput
  name: String
}

input ProjectUpdateWithoutMessagesDataInput {
  clientId: ID
  accounts: AccountUpdateManyWithoutProjectInput
  persons: PersonUpdateManyWithoutProjectInput
  name: String
}

input ProjectUpdateWithoutPersonsDataInput {
  clientId: ID
  accounts: AccountUpdateManyWithoutProjectInput
  messages: MessageUpdateManyWithoutProjectInput
  name: String
}

input ProjectUpsertNestedInput {
  update: ProjectUpdateDataInput!
  create: ProjectCreateInput!
}

input ProjectUpsertWithoutAccountsInput {
  update: ProjectUpdateWithoutAccountsDataInput!
  create: ProjectCreateWithoutAccountsInput!
}

input ProjectUpsertWithoutMessagesInput {
  update: ProjectUpdateWithoutMessagesDataInput!
  create: ProjectCreateWithoutMessagesInput!
}

input ProjectUpsertWithoutPersonsInput {
  update: ProjectUpdateWithoutPersonsDataInput!
  create: ProjectCreateWithoutPersonsInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  accounts_every: AccountWhereInput
  accounts_some: AccountWhereInput
  accounts_none: AccountWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  persons_every: PersonWhereInput
  persons_some: PersonWhereInput
  persons_none: PersonWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
  clientId: ID
  name: String
}

type Query {
  account(where: AccountWhereUniqueInput!): Account
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!
  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  person(where: PersonWhereUniqueInput!): Person
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  projectRights(where: ProjectRightWhereInput, orderBy: ProjectRightOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProjectRight]!
  projectRightsConnection(where: ProjectRightWhereInput, orderBy: ProjectRightOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectRightConnection!
  submessage(where: SubmessageWhereUniqueInput!): Submessage
  submessages(where: SubmessageWhereInput, orderBy: SubmessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Submessage]!
  submessagesConnection(where: SubmessageWhereInput, orderBy: SubmessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubmessageConnection!
  node(id: ID!): Node
}

enum RIGHT {
  ADMIN
  AGENT
  VIEWER
}

type Submessage {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  receivedAt: DateTime
  message: Message!
  submitter: Person!
  integration_id: String
  type: MESSAGE_TYPE!
  content: String!
}

type SubmessageConnection {
  pageInfo: PageInfo!
  edges: [SubmessageEdge]!
  aggregate: AggregateSubmessage!
}

input SubmessageCreateInput {
  clientId: ID
  receivedAt: DateTime
  message: MessageCreateOneWithoutSub_messagesInput!
  submitter: PersonCreateOneInput!
  integration_id: String
  type: MESSAGE_TYPE
  content: String
}

input SubmessageCreateManyWithoutMessageInput {
  create: [SubmessageCreateWithoutMessageInput!]
  connect: [SubmessageWhereUniqueInput!]
}

input SubmessageCreateWithoutMessageInput {
  clientId: ID
  receivedAt: DateTime
  submitter: PersonCreateOneInput!
  integration_id: String
  type: MESSAGE_TYPE
  content: String
}

type SubmessageEdge {
  node: Submessage!
  cursor: String!
}

enum SubmessageOrderByInput {
  id_ASC
  id_DESC
  clientId_ASC
  clientId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  receivedAt_ASC
  receivedAt_DESC
  integration_id_ASC
  integration_id_DESC
  type_ASC
  type_DESC
  content_ASC
  content_DESC
}

type SubmessagePreviousValues {
  id: ID!
  clientId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  receivedAt: DateTime
  integration_id: String
  type: MESSAGE_TYPE!
  content: String!
}

input SubmessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  receivedAt: DateTime
  receivedAt_not: DateTime
  receivedAt_in: [DateTime!]
  receivedAt_not_in: [DateTime!]
  receivedAt_lt: DateTime
  receivedAt_lte: DateTime
  receivedAt_gt: DateTime
  receivedAt_gte: DateTime
  integration_id: String
  integration_id_not: String
  integration_id_in: [String!]
  integration_id_not_in: [String!]
  integration_id_lt: String
  integration_id_lte: String
  integration_id_gt: String
  integration_id_gte: String
  integration_id_contains: String
  integration_id_not_contains: String
  integration_id_starts_with: String
  integration_id_not_starts_with: String
  integration_id_ends_with: String
  integration_id_not_ends_with: String
  type: MESSAGE_TYPE
  type_not: MESSAGE_TYPE
  type_in: [MESSAGE_TYPE!]
  type_not_in: [MESSAGE_TYPE!]
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [SubmessageScalarWhereInput!]
  OR: [SubmessageScalarWhereInput!]
  NOT: [SubmessageScalarWhereInput!]
}

type SubmessageSubscriptionPayload {
  mutation: MutationType!
  node: Submessage
  updatedFields: [String!]
  previousValues: SubmessagePreviousValues
}

input SubmessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubmessageWhereInput
  AND: [SubmessageSubscriptionWhereInput!]
  OR: [SubmessageSubscriptionWhereInput!]
  NOT: [SubmessageSubscriptionWhereInput!]
}

input SubmessageUpdateInput {
  clientId: ID
  receivedAt: DateTime
  message: MessageUpdateOneRequiredWithoutSub_messagesInput
  submitter: PersonUpdateOneRequiredInput
  integration_id: String
  type: MESSAGE_TYPE
  content: String
}

input SubmessageUpdateManyDataInput {
  clientId: ID
  receivedAt: DateTime
  integration_id: String
  type: MESSAGE_TYPE
  content: String
}

input SubmessageUpdateManyMutationInput {
  clientId: ID
  receivedAt: DateTime
  integration_id: String
  type: MESSAGE_TYPE
  content: String
}

input SubmessageUpdateManyWithoutMessageInput {
  create: [SubmessageCreateWithoutMessageInput!]
  delete: [SubmessageWhereUniqueInput!]
  connect: [SubmessageWhereUniqueInput!]
  set: [SubmessageWhereUniqueInput!]
  disconnect: [SubmessageWhereUniqueInput!]
  update: [SubmessageUpdateWithWhereUniqueWithoutMessageInput!]
  upsert: [SubmessageUpsertWithWhereUniqueWithoutMessageInput!]
  deleteMany: [SubmessageScalarWhereInput!]
  updateMany: [SubmessageUpdateManyWithWhereNestedInput!]
}

input SubmessageUpdateManyWithWhereNestedInput {
  where: SubmessageScalarWhereInput!
  data: SubmessageUpdateManyDataInput!
}

input SubmessageUpdateWithoutMessageDataInput {
  clientId: ID
  receivedAt: DateTime
  submitter: PersonUpdateOneRequiredInput
  integration_id: String
  type: MESSAGE_TYPE
  content: String
}

input SubmessageUpdateWithWhereUniqueWithoutMessageInput {
  where: SubmessageWhereUniqueInput!
  data: SubmessageUpdateWithoutMessageDataInput!
}

input SubmessageUpsertWithWhereUniqueWithoutMessageInput {
  where: SubmessageWhereUniqueInput!
  update: SubmessageUpdateWithoutMessageDataInput!
  create: SubmessageCreateWithoutMessageInput!
}

input SubmessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  clientId: ID
  clientId_not: ID
  clientId_in: [ID!]
  clientId_not_in: [ID!]
  clientId_lt: ID
  clientId_lte: ID
  clientId_gt: ID
  clientId_gte: ID
  clientId_contains: ID
  clientId_not_contains: ID
  clientId_starts_with: ID
  clientId_not_starts_with: ID
  clientId_ends_with: ID
  clientId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  receivedAt: DateTime
  receivedAt_not: DateTime
  receivedAt_in: [DateTime!]
  receivedAt_not_in: [DateTime!]
  receivedAt_lt: DateTime
  receivedAt_lte: DateTime
  receivedAt_gt: DateTime
  receivedAt_gte: DateTime
  message: MessageWhereInput
  submitter: PersonWhereInput
  integration_id: String
  integration_id_not: String
  integration_id_in: [String!]
  integration_id_not_in: [String!]
  integration_id_lt: String
  integration_id_lte: String
  integration_id_gt: String
  integration_id_gte: String
  integration_id_contains: String
  integration_id_not_contains: String
  integration_id_starts_with: String
  integration_id_not_starts_with: String
  integration_id_ends_with: String
  integration_id_not_ends_with: String
  type: MESSAGE_TYPE
  type_not: MESSAGE_TYPE
  type_in: [MESSAGE_TYPE!]
  type_not_in: [MESSAGE_TYPE!]
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [SubmessageWhereInput!]
  OR: [SubmessageWhereInput!]
  NOT: [SubmessageWhereInput!]
}

input SubmessageWhereUniqueInput {
  id: ID
  clientId: ID
}

type Subscription {
  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  projectRight(where: ProjectRightSubscriptionWhereInput): ProjectRightSubscriptionPayload
  submessage(where: SubmessageSubscriptionWhereInput): SubmessageSubscriptionPayload
}
`