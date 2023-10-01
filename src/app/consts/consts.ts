import { HttpHeaders } from "@angular/common/http";

export const ProjectConsts = {
    rooturl : 'https://ehf0pzpaij.execute-api.us-east-2.amazonaws.com',
    headers : new HttpHeaders({
        'Content-Type': 'application/json', // Set the content type to JSON
      }),
  };