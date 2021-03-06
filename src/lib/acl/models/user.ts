import {RolesPerOrganisation}   from    './roles-per-organisation';
import {Role}                   from    './role';
import {RolePermissions}        from    './role-permissions';

/**
 * Basic user class, may be extended as needed
 */
export class User {
    /**
     * Identifier of the user
     */
    id: string;
    /**
     * Users roles sorted by the role that organisaiton they belong to
     */
    rolesPerOrganisation: RolesPerOrganisation;
    /**
     * All roles that are attached to the user
     */
    roles: Array<Role>;
        /**
     * Permissions attached to this role
     */
    permissions: RolePermissions;
}
