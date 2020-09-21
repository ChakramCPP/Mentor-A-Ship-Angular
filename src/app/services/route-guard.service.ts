
import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private route:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(sessionStorage.getItem("authenticated")=="true"){
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
}
