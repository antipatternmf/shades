import { API_ROOT } from 'api';
import { UserResponse } from 'api/chat';

export function transformAvatarUrl(src: string) {
  return `${API_ROOT}/api/v2/resources/${src}`;
}

export function transformAvatarUrlInUserResponse(
  userResponse: UserResponse,
): UserResponse {
  const transformedAvatarUrl = userResponse.avatar
    ? transformAvatarUrl(userResponse.avatar)
    : '';

  return {
    ...userResponse,
    avatar: transformedAvatarUrl,
  };
}
