/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onCreateRoom(filter: $filter) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onUpdateRoom(filter: $filter) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
    onDeleteRoom(filter: $filter) {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onCreateSubject(filter: $filter) {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onUpdateSubject(filter: $filter) {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onDeleteSubject(filter: $filter) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateSheet = /* GraphQL */ `
  subscription OnCreateSheet($filter: ModelSubscriptionSheetFilterInput) {
    onCreateSheet(filter: $filter) {
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
export const onUpdateSheet = /* GraphQL */ `
  subscription OnUpdateSheet($filter: ModelSubscriptionSheetFilterInput) {
    onUpdateSheet(filter: $filter) {
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
export const onDeleteSheet = /* GraphQL */ `
  subscription OnDeleteSheet($filter: ModelSubscriptionSheetFilterInput) {
    onDeleteSheet(filter: $filter) {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
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
