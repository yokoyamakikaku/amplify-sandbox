/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
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
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        lessonTeachersId
        teacherRoomId
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        lessonStudentsId
        studentRoomId
      }
      nextToken
    }
  }
`;
export const getSheet = /* GraphQL */ `
  query GetSheet($id: ID!) {
    getSheet(id: $id) {
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
export const listSheets = /* GraphQL */ `
  query ListSheets(
    $filter: ModelSheetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        lessonSheetsId
        sheetRoomId
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subject {
          id
          name
          createdAt
          updatedAt
          subjectRoomId
        }
        teachers {
          nextToken
        }
        students {
          nextToken
        }
        sheets {
          nextToken
        }
        startedAt
        finishedAt
        createdAt
        updatedAt
        lessonSubjectId
      }
      nextToken
    }
  }
`;
