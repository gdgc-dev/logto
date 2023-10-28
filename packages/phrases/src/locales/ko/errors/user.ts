const user = {
  username_already_in_use: '이 사용자 이름은 다른 사람이 이미 사용 중이에요.',
  email_already_in_use: '이 이메일은 다른 계정에서 이미 사용 중이에요.',
  phone_already_in_use: '이 휴대전화번호는 다른 계정에서 이미 사용 중이에요.',
  invalid_email: '유효하지 않은 이메일이에요.',
  invalid_phone: '유효하지 않은 휴대전화번호예요.',
  email_not_exist: '이메일 주소가 아직 등록되지 않았어요.',
  phone_not_exist: '휴대전화번호가 아직 등록되지 않았어요.',
  identity_not_exist: '소셜 계정이 아직 등록되지 않았어요.',
  identity_already_in_use: '소셜 계정이 이미 등록되어 있어요.',
  social_account_exists_in_profile: '이 소셜 계정은 이미 연동되어 있습니다.',
  cannot_delete_self: '자기 자신을 삭제할 수 없어요.',
  sign_up_method_not_enabled: '이 회원가입 방법은 활성화되어있지 않아요.',
  sign_in_method_not_enabled: '이 로그인 방법은 활성화되어있지 않아요.',
  same_password: '새로운 비밀번호는 이전 비밀번호와 같으면 안 돼요.',
  password_required_in_profile: '로그인 전에 비밀번호를 설정해야 해요.',
  new_password_required_in_profile: '새로운 비밀번호를 설정해야 해요.',
  password_exists_in_profile: '이미 비밀번호가 설정되어 있어요.',
  username_required_in_profile: '로그인 전에 사용자 이름을 설정해야 해요.',
  username_exists_in_profile: '이미 사용자 이름이 설정되어 있어요.',
  email_required_in_profile: '로그인 전에 이메일 주소를 설정해야 해요.',
  email_exists_in_profile: '이미 이메일 주소가 설정되어 있어요.',
  phone_required_in_profile: '로그인 전에 휴대전화번호를 설정해야 해요.',
  phone_exists_in_profile: '이미 휴대전화번호가 설정되어 있어요.',
  email_or_phone_required_in_profile: '로그인 전에 이메일 주소 또는 휴대전화번호를 설정해야 해요.',
  suspended: '이 계정은 일시 정지되었어요.',
  user_not_exist: '{{identifier}}의 사용자가 아직 등록되지 않았어요.',
  missing_profile: '로그인 전에 추가 정보를 제공해야 해요.',
  role_exists: '역할 ID {{roleId}}은/는 이미 이 사용자에게 할당되어 있어요.',
  invalid_role_type:
    '유효하지 않은 역할 유형입니다. 사용자에게 기계 대 기계 역할을 할당할 수 없습니다.',
  /** UNTRANSLATED */
  missing_mfa: 'You need to bind additional MFA before signing-in.',
  /** UNTRANSLATED */
  totp_already_in_use: 'TOTP is already in use.',
  /** UNTRANSLATED */
  backup_code_already_in_use: 'Backup code is already in use.',
};

export default Object.freeze(user);
