import { UnAuthenticated } from '../errors/index.js';
const checkPermissions = (reqUser, resourceId) => {
  if (reqUser.userId === resourceId.toString()) return;
  throw new UnAuthenticated('Not authorized to access this route...');
};

export default checkPermissions;
