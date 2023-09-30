import { HttpHeaders } from "@angular/common/http";

export const ProjectConsts = {
    rooturl : 'https://7bz2s5mdrd.execute-api.us-east-2.amazonaws.com',
    headers : new HttpHeaders({
        'Content-Type': 'application/json', // Set the content type to JSON
      }),
  };