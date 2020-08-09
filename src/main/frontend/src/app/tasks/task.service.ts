import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {
    }

    getTasks(){
        let observable = this.http.get('/api/tasks');
        return observable;
    }
}
