/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      name
      owner {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      roomOwnerId
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      name
      owner {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      roomOwnerId
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      name
      owner {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      roomOwnerId
    }
  }
`;
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      subjectRoomId
    }
  }
`;
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      subjectRoomId
    }
  }
`;
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      subjectRoomId
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonTeachersId
      teacherRoomId
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonTeachersId
      teacherRoomId
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonTeachersId
      teacherRoomId
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonStudentsId
      studentRoomId
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonStudentsId
      studentRoomId
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonStudentsId
      studentRoomId
    }
  }
`;
export const createSheet = /* GraphQL */ `
  mutation CreateSheet(
    $input: CreateSheetInput!
    $condition: ModelSheetConditionInput
  ) {
    createSheet(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonSheetsId
      sheetRoomId
    }
  }
`;
export const updateSheet = /* GraphQL */ `
  mutation UpdateSheet(
    $input: UpdateSheetInput!
    $condition: ModelSheetConditionInput
  ) {
    updateSheet(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonSheetsId
      sheetRoomId
    }
  }
`;
export const deleteSheet = /* GraphQL */ `
  mutation DeleteSheet(
    $input: DeleteSheetInput!
    $condition: ModelSheetConditionInput
  ) {
    deleteSheet(input: $input, condition: $condition) {
      id
      name
      room {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        roomOwnerId
      }
      createdAt
      updatedAt
      lessonSheetsId
      sheetRoomId
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      name
      subject {
        id
        name
        room {
          id
          name
          createdAt
          updatedAt
          roomOwnerId
        }
        createdAt
        updatedAt
        subjectRoomId
      }
      teachers {
        items {
          id
          name
          createdAt
          updatedAt
          lessonTeachersId
          teacherRoomId
        }
        nextToken
      }
      students {
        items {
          id
          name
          createdAt
          updatedAt
          lessonStudentsId
          studentRoomId
        }
        nextToken
      }
      sheets {
        items {
          id
          name
          createdAt
          updatedAt
          lessonSheetsId
          sheetRoomId
        }
        nextToken
      }
      startedAt
      finishedAt
      createdAt
      updatedAt
      lessonSubjectId
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      name
      subject {
        id
        name
        room {
          id
          name
          createdAt
          updatedAt
          roomOwnerId
        }
        createdAt
        updatedAt
        subjectRoomId
      }
      teachers {
        items {
          id
          name
          createdAt
          updatedAt
          lessonTeachersId
          teacherRoomId
        }
        nextToken
      }
      students {
        items {
          id
          name
          createdAt
          updatedAt
          lessonStudentsId
          studentRoomId
        }
        nextToken
      }
      sheets {
        items {
          id
          name
          createdAt
          updatedAt
          lessonSheetsId
          sheetRoomId
        }
        nextToken
      }
      startedAt
      finishedAt
      createdAt
      updatedAt
      lessonSubjectId
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      name
      subject {
        id
        name
        room {
          id
          name
          createdAt
          updatedAt
          roomOwnerId
        }
        createdAt
        updatedAt
        subjectRoomId
      }
      teachers {
        items {
          id
          name
          createdAt
          updatedAt
          lessonTeachersId
          teacherRoomId
        }
        nextToken
      }
      students {
        items {
          id
          name
          createdAt
          updatedAt
          lessonStudentsId
          studentRoomId
        }
        nextToken
      }
      sheets {
        items {
          id
          name
          createdAt
          updatedAt
          lessonSheetsId
          sheetRoomId
        }
        nextToken
      }
      startedAt
      finishedAt
      createdAt
      updatedAt
      lessonSubjectId
    }
  }
`;
