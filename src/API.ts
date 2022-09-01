/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateRoomInput = {
  id?: string | null,
  name: string,
  roomOwnerId?: string | null,
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
  roomOwnerId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Room = {
  __typename: "Room",
  id: string,
  name: string,
  owner?: User | null,
  createdAt: string,
  updatedAt: string,
  roomOwnerId?: string | null,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
  roomOwnerId?: string | null,
};

export type DeleteRoomInput = {
  id: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  name: string,
  subjectRoomId?: string | null,
};

export type ModelSubjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
  subjectRoomId?: ModelIDInput | null,
};

export type Subject = {
  __typename: "Subject",
  id: string,
  name: string,
  room?: Room | null,
  createdAt: string,
  updatedAt: string,
  subjectRoomId?: string | null,
};

export type UpdateSubjectInput = {
  id: string,
  name?: string | null,
  subjectRoomId?: string | null,
};

export type DeleteSubjectInput = {
  id: string,
};

export type CreateTeacherInput = {
  id?: string | null,
  name: string,
  lessonTeachersId?: string | null,
  teacherRoomId?: string | null,
};

export type ModelTeacherConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeacherConditionInput | null > | null,
  or?: Array< ModelTeacherConditionInput | null > | null,
  not?: ModelTeacherConditionInput | null,
  lessonTeachersId?: ModelIDInput | null,
  teacherRoomId?: ModelIDInput | null,
};

export type Teacher = {
  __typename: "Teacher",
  id: string,
  name: string,
  room?: Room | null,
  createdAt: string,
  updatedAt: string,
  lessonTeachersId?: string | null,
  teacherRoomId?: string | null,
};

export type UpdateTeacherInput = {
  id: string,
  name?: string | null,
  lessonTeachersId?: string | null,
  teacherRoomId?: string | null,
};

export type DeleteTeacherInput = {
  id: string,
};

export type CreateStudentInput = {
  id?: string | null,
  name: string,
  lessonStudentsId?: string | null,
  studentRoomId?: string | null,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  lessonStudentsId?: ModelIDInput | null,
  studentRoomId?: ModelIDInput | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name: string,
  room?: Room | null,
  createdAt: string,
  updatedAt: string,
  lessonStudentsId?: string | null,
  studentRoomId?: string | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  lessonStudentsId?: string | null,
  studentRoomId?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateSheetInput = {
  id?: string | null,
  name: string,
  lessonSheetsId?: string | null,
  sheetRoomId?: string | null,
};

export type ModelSheetConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSheetConditionInput | null > | null,
  or?: Array< ModelSheetConditionInput | null > | null,
  not?: ModelSheetConditionInput | null,
  lessonSheetsId?: ModelIDInput | null,
  sheetRoomId?: ModelIDInput | null,
};

export type Sheet = {
  __typename: "Sheet",
  id: string,
  name: string,
  room?: Room | null,
  createdAt: string,
  updatedAt: string,
  lessonSheetsId?: string | null,
  sheetRoomId?: string | null,
};

export type UpdateSheetInput = {
  id: string,
  name?: string | null,
  lessonSheetsId?: string | null,
  sheetRoomId?: string | null,
};

export type DeleteSheetInput = {
  id: string,
};

export type CreateLessonInput = {
  id?: string | null,
  name: string,
  startedAt: string,
  finishedAt: string,
  lessonSubjectId?: string | null,
};

export type ModelLessonConditionInput = {
  name?: ModelStringInput | null,
  startedAt?: ModelStringInput | null,
  finishedAt?: ModelStringInput | null,
  and?: Array< ModelLessonConditionInput | null > | null,
  or?: Array< ModelLessonConditionInput | null > | null,
  not?: ModelLessonConditionInput | null,
  lessonSubjectId?: ModelIDInput | null,
};

export type Lesson = {
  __typename: "Lesson",
  id: string,
  name: string,
  subject?: Subject | null,
  teachers?: ModelTeacherConnection | null,
  students?: ModelStudentConnection | null,
  sheets?: ModelSheetConnection | null,
  startedAt: string,
  finishedAt: string,
  createdAt: string,
  updatedAt: string,
  lessonSubjectId?: string | null,
};

export type ModelTeacherConnection = {
  __typename: "ModelTeacherConnection",
  items:  Array<Teacher | null >,
  nextToken?: string | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelSheetConnection = {
  __typename: "ModelSheetConnection",
  items:  Array<Sheet | null >,
  nextToken?: string | null,
};

export type UpdateLessonInput = {
  id: string,
  name?: string | null,
  startedAt?: string | null,
  finishedAt?: string | null,
  lessonSubjectId?: string | null,
};

export type DeleteLessonInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
  roomOwnerId?: ModelIDInput | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<Room | null >,
  nextToken?: string | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
  subjectRoomId?: ModelIDInput | null,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items:  Array<Subject | null >,
  nextToken?: string | null,
};

export type ModelTeacherFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeacherFilterInput | null > | null,
  or?: Array< ModelTeacherFilterInput | null > | null,
  not?: ModelTeacherFilterInput | null,
  lessonTeachersId?: ModelIDInput | null,
  teacherRoomId?: ModelIDInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
  lessonStudentsId?: ModelIDInput | null,
  studentRoomId?: ModelIDInput | null,
};

export type ModelSheetFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSheetFilterInput | null > | null,
  or?: Array< ModelSheetFilterInput | null > | null,
  not?: ModelSheetFilterInput | null,
  lessonSheetsId?: ModelIDInput | null,
  sheetRoomId?: ModelIDInput | null,
};

export type ModelLessonFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startedAt?: ModelStringInput | null,
  finishedAt?: ModelStringInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  not?: ModelLessonFilterInput | null,
  lessonSubjectId?: ModelIDInput | null,
};

export type ModelLessonConnection = {
  __typename: "ModelLessonConnection",
  items:  Array<Lesson | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
};

export type ModelSubscriptionSubjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
};

export type ModelSubscriptionTeacherFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeacherFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeacherFilterInput | null > | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type ModelSubscriptionSheetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSheetFilterInput | null > | null,
  or?: Array< ModelSubscriptionSheetFilterInput | null > | null,
};

export type ModelSubscriptionLessonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  startedAt?: ModelSubscriptionStringInput | null,
  finishedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLessonFilterInput | null > | null,
  or?: Array< ModelSubscriptionLessonFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    roomOwnerId?: string | null,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    roomOwnerId?: string | null,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    roomOwnerId?: string | null,
  } | null,
};

export type CreateSubjectMutationVariables = {
  input: CreateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type CreateSubjectMutation = {
  createSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subjectRoomId?: string | null,
  } | null,
};

export type UpdateSubjectMutationVariables = {
  input: UpdateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type UpdateSubjectMutation = {
  updateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subjectRoomId?: string | null,
  } | null,
};

export type DeleteSubjectMutationVariables = {
  input: DeleteSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type DeleteSubjectMutation = {
  deleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subjectRoomId?: string | null,
  } | null,
};

export type CreateTeacherMutationVariables = {
  input: CreateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
  createTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonTeachersId?: string | null,
    teacherRoomId?: string | null,
  } | null,
};

export type UpdateTeacherMutationVariables = {
  input: UpdateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
  updateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonTeachersId?: string | null,
    teacherRoomId?: string | null,
  } | null,
};

export type DeleteTeacherMutationVariables = {
  input: DeleteTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
  deleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonTeachersId?: string | null,
    teacherRoomId?: string | null,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonStudentsId?: string | null,
    studentRoomId?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonStudentsId?: string | null,
    studentRoomId?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonStudentsId?: string | null,
    studentRoomId?: string | null,
  } | null,
};

export type CreateSheetMutationVariables = {
  input: CreateSheetInput,
  condition?: ModelSheetConditionInput | null,
};

export type CreateSheetMutation = {
  createSheet?:  {
    __typename: "Sheet",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonSheetsId?: string | null,
    sheetRoomId?: string | null,
  } | null,
};

export type UpdateSheetMutationVariables = {
  input: UpdateSheetInput,
  condition?: ModelSheetConditionInput | null,
};

export type UpdateSheetMutation = {
  updateSheet?:  {
    __typename: "Sheet",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonSheetsId?: string | null,
    sheetRoomId?: string | null,
  } | null,
};

export type DeleteSheetMutationVariables = {
  input: DeleteSheetInput,
  condition?: ModelSheetConditionInput | null,
};

export type DeleteSheetMutation = {
  deleteSheet?:  {
    __typename: "Sheet",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonSheetsId?: string | null,
    sheetRoomId?: string | null,
  } | null,
};

export type CreateLessonMutationVariables = {
  input: CreateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type CreateLessonMutation = {
  createLesson?:  {
    __typename: "Lesson",
    id: string,
    name: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subjectRoomId?: string | null,
    } | null,
    teachers?:  {
      __typename: "ModelTeacherConnection",
      items:  Array< {
        __typename: "Teacher",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonTeachersId?: string | null,
        teacherRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonStudentsId?: string | null,
        studentRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sheets?:  {
      __typename: "ModelSheetConnection",
      items:  Array< {
        __typename: "Sheet",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonSheetsId?: string | null,
        sheetRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startedAt: string,
    finishedAt: string,
    createdAt: string,
    updatedAt: string,
    lessonSubjectId?: string | null,
  } | null,
};

export type UpdateLessonMutationVariables = {
  input: UpdateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type UpdateLessonMutation = {
  updateLesson?:  {
    __typename: "Lesson",
    id: string,
    name: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subjectRoomId?: string | null,
    } | null,
    teachers?:  {
      __typename: "ModelTeacherConnection",
      items:  Array< {
        __typename: "Teacher",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonTeachersId?: string | null,
        teacherRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonStudentsId?: string | null,
        studentRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sheets?:  {
      __typename: "ModelSheetConnection",
      items:  Array< {
        __typename: "Sheet",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonSheetsId?: string | null,
        sheetRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startedAt: string,
    finishedAt: string,
    createdAt: string,
    updatedAt: string,
    lessonSubjectId?: string | null,
  } | null,
};

export type DeleteLessonMutationVariables = {
  input: DeleteLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type DeleteLessonMutation = {
  deleteLesson?:  {
    __typename: "Lesson",
    id: string,
    name: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subjectRoomId?: string | null,
    } | null,
    teachers?:  {
      __typename: "ModelTeacherConnection",
      items:  Array< {
        __typename: "Teacher",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonTeachersId?: string | null,
        teacherRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonStudentsId?: string | null,
        studentRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sheets?:  {
      __typename: "ModelSheetConnection",
      items:  Array< {
        __typename: "Sheet",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonSheetsId?: string | null,
        sheetRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startedAt: string,
    finishedAt: string,
    createdAt: string,
    updatedAt: string,
    lessonSubjectId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    roomOwnerId?: string | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubjectQueryVariables = {
  id: string,
};

export type GetSubjectQuery = {
  getSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subjectRoomId?: string | null,
  } | null,
};

export type ListSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subjectRoomId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeacherQueryVariables = {
  id: string,
};

export type GetTeacherQuery = {
  getTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonTeachersId?: string | null,
    teacherRoomId?: string | null,
  } | null,
};

export type ListTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeachersQuery = {
  listTeachers?:  {
    __typename: "ModelTeacherConnection",
    items:  Array< {
      __typename: "Teacher",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonTeachersId?: string | null,
      teacherRoomId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonStudentsId?: string | null,
    studentRoomId?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonStudentsId?: string | null,
      studentRoomId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSheetQueryVariables = {
  id: string,
};

export type GetSheetQuery = {
  getSheet?:  {
    __typename: "Sheet",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonSheetsId?: string | null,
    sheetRoomId?: string | null,
  } | null,
};

export type ListSheetsQueryVariables = {
  filter?: ModelSheetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSheetsQuery = {
  listSheets?:  {
    __typename: "ModelSheetConnection",
    items:  Array< {
      __typename: "Sheet",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      lessonSheetsId?: string | null,
      sheetRoomId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLessonQueryVariables = {
  id: string,
};

export type GetLessonQuery = {
  getLesson?:  {
    __typename: "Lesson",
    id: string,
    name: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subjectRoomId?: string | null,
    } | null,
    teachers?:  {
      __typename: "ModelTeacherConnection",
      items:  Array< {
        __typename: "Teacher",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonTeachersId?: string | null,
        teacherRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonStudentsId?: string | null,
        studentRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sheets?:  {
      __typename: "ModelSheetConnection",
      items:  Array< {
        __typename: "Sheet",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonSheetsId?: string | null,
        sheetRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startedAt: string,
    finishedAt: string,
    createdAt: string,
    updatedAt: string,
    lessonSubjectId?: string | null,
  } | null,
};

export type ListLessonsQueryVariables = {
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLessonsQuery = {
  listLessons?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      name: string,
      subject?:  {
        __typename: "Subject",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        subjectRoomId?: string | null,
      } | null,
      teachers?:  {
        __typename: "ModelTeacherConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      sheets?:  {
        __typename: "ModelSheetConnection",
        nextToken?: string | null,
      } | null,
      startedAt: string,
      finishedAt: string,
      createdAt: string,
      updatedAt: string,
      lessonSubjectId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    roomOwnerId?: string | null,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    roomOwnerId?: string | null,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    roomOwnerId?: string | null,
  } | null,
};

export type OnCreateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subjectRoomId?: string | null,
  } | null,
};

export type OnUpdateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subjectRoomId?: string | null,
  } | null,
};

export type OnDeleteSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    subjectRoomId?: string | null,
  } | null,
};

export type OnCreateTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnCreateTeacherSubscription = {
  onCreateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonTeachersId?: string | null,
    teacherRoomId?: string | null,
  } | null,
};

export type OnUpdateTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnUpdateTeacherSubscription = {
  onUpdateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonTeachersId?: string | null,
    teacherRoomId?: string | null,
  } | null,
};

export type OnDeleteTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnDeleteTeacherSubscription = {
  onDeleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonTeachersId?: string | null,
    teacherRoomId?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonStudentsId?: string | null,
    studentRoomId?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonStudentsId?: string | null,
    studentRoomId?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonStudentsId?: string | null,
    studentRoomId?: string | null,
  } | null,
};

export type OnCreateSheetSubscriptionVariables = {
  filter?: ModelSubscriptionSheetFilterInput | null,
};

export type OnCreateSheetSubscription = {
  onCreateSheet?:  {
    __typename: "Sheet",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonSheetsId?: string | null,
    sheetRoomId?: string | null,
  } | null,
};

export type OnUpdateSheetSubscriptionVariables = {
  filter?: ModelSubscriptionSheetFilterInput | null,
};

export type OnUpdateSheetSubscription = {
  onUpdateSheet?:  {
    __typename: "Sheet",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonSheetsId?: string | null,
    sheetRoomId?: string | null,
  } | null,
};

export type OnDeleteSheetSubscriptionVariables = {
  filter?: ModelSubscriptionSheetFilterInput | null,
};

export type OnDeleteSheetSubscription = {
  onDeleteSheet?:  {
    __typename: "Sheet",
    id: string,
    name: string,
    room?:  {
      __typename: "Room",
      id: string,
      name: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      roomOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    lessonSheetsId?: string | null,
    sheetRoomId?: string | null,
  } | null,
};

export type OnCreateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnCreateLessonSubscription = {
  onCreateLesson?:  {
    __typename: "Lesson",
    id: string,
    name: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subjectRoomId?: string | null,
    } | null,
    teachers?:  {
      __typename: "ModelTeacherConnection",
      items:  Array< {
        __typename: "Teacher",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonTeachersId?: string | null,
        teacherRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonStudentsId?: string | null,
        studentRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sheets?:  {
      __typename: "ModelSheetConnection",
      items:  Array< {
        __typename: "Sheet",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonSheetsId?: string | null,
        sheetRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startedAt: string,
    finishedAt: string,
    createdAt: string,
    updatedAt: string,
    lessonSubjectId?: string | null,
  } | null,
};

export type OnUpdateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnUpdateLessonSubscription = {
  onUpdateLesson?:  {
    __typename: "Lesson",
    id: string,
    name: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subjectRoomId?: string | null,
    } | null,
    teachers?:  {
      __typename: "ModelTeacherConnection",
      items:  Array< {
        __typename: "Teacher",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonTeachersId?: string | null,
        teacherRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonStudentsId?: string | null,
        studentRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sheets?:  {
      __typename: "ModelSheetConnection",
      items:  Array< {
        __typename: "Sheet",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonSheetsId?: string | null,
        sheetRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startedAt: string,
    finishedAt: string,
    createdAt: string,
    updatedAt: string,
    lessonSubjectId?: string | null,
  } | null,
};

export type OnDeleteLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnDeleteLessonSubscription = {
  onDeleteLesson?:  {
    __typename: "Lesson",
    id: string,
    name: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      room?:  {
        __typename: "Room",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        roomOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      subjectRoomId?: string | null,
    } | null,
    teachers?:  {
      __typename: "ModelTeacherConnection",
      items:  Array< {
        __typename: "Teacher",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonTeachersId?: string | null,
        teacherRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonStudentsId?: string | null,
        studentRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sheets?:  {
      __typename: "ModelSheetConnection",
      items:  Array< {
        __typename: "Sheet",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        lessonSheetsId?: string | null,
        sheetRoomId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startedAt: string,
    finishedAt: string,
    createdAt: string,
    updatedAt: string,
    lessonSubjectId?: string | null,
  } | null,
};
