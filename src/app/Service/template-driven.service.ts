import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TemplateDrivenService  {//implements CanActivate

// CanActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
// {
// const employeeExists=!!this._employeeService.getEmployee(+route.paramMap.get('id'));
// if(employeeExists)
// {
//   return true;
// }
// else
// {
//   this._router.navigate(['/notfound']);
//   return false;
// }

//}
  constructor() { }
}
