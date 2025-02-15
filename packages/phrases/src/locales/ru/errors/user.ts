const user = {
  username_already_in_use: 'Это имя пользователя уже используется.',
  email_already_in_use: 'Этот адрес электронной почты связан с существующей учетной записью.',
  phone_already_in_use: 'Этот номер телефона связан с существующей учетной записью.',
  invalid_email: 'Некорректный адрес электронной почты.',
  invalid_phone: 'Некорректный номер телефона.',
  email_not_exist: 'Адрес электронной почты не зарегистрирован.',
  phone_not_exist: 'Номер телефона не зарегистрирован.',
  identity_not_exist: 'Учетная запись социальной сети не зарегистрирована.',
  identity_already_in_use:
    'Учетная запись в социальной сети связана с существующей учетной записью.',
  social_account_exists_in_profile: 'Вы уже связали эту учетную запись с социальной сетью.',
  cannot_delete_self: 'Вы не можете удалить свою собственную учетную запись.',
  sign_up_method_not_enabled: 'Этот метод регистрации не включен.',
  sign_in_method_not_enabled: 'Этот метод входа не включен.',
  same_password: 'Новый пароль не может совпадать со старым паролем.',
  password_required_in_profile: 'Вы должны установить пароль перед входом в систему.',
  new_password_required_in_profile: 'Вы должны установить новый пароль.',
  password_exists_in_profile: 'Пароль уже существует в вашем профиле.',
  username_required_in_profile: 'Вы должны установить имя пользователя перед входом в систему.',
  username_exists_in_profile: 'Имя пользователя уже существует в вашем профиле.',
  email_required_in_profile: 'Вы должны добавить адрес электронной почты перед входом в систему.',
  email_exists_in_profile: 'Ваш профиль уже связан с адресом электронной почты.',
  phone_required_in_profile: 'Вы должны добавить номер телефона перед входом в систему.',
  phone_exists_in_profile: 'Ваш профиль уже связан с номером телефона.',
  email_or_phone_required_in_profile:
    'Вы должны добавить адрес электронной почты или номер телефона перед входом в систему.',
  suspended: 'Эта учетная запись приостановлена.',
  user_not_exist: 'Пользователя с {{ identifier }} не существует.',
  missing_profile: 'Вы должны предоставить дополнительную информацию перед входом в систему.',
  role_exists: 'Идентификатор роли {{roleId}} уже добавлен в этого пользователя',
  invalid_role_type: 'Недопустимый тип роли, роль машины к машине нельзя назначить пользователю.',
  missing_mfa: 'You need to bind additional MFA before signing-in.',
  totp_already_in_use: 'TOTP is already in use.',
  backup_code_already_in_use: 'Backup code is already in use.',
  password_algorithm_required: 'Требуется алгоритм пароля.',
  password_and_digest: 'Вы не можете установить как обычный пароль, так и дайджест пароля.',
  personal_access_token_name_exists: 'Имя личного токена доступа уже существует.',
  /** UNTRANSLATED */
  totp_secret_invalid: 'Invalid TOTP secret supplied.',
  /** UNTRANSLATED */
  wrong_backup_code_format: 'Backup code format is invalid.',
  /** UNTRANSLATED */
  username_required: 'Username is a required identifier, you can not set it to null.',
  /** UNTRANSLATED */
  email_or_phone_required:
    'Email address or phone number is a required identifier, at least one is required.',
  /** UNTRANSLATED */
  email_required: 'Email address is a required identifier, you can not set it to null.',
  /** UNTRANSLATED */
  phone_required: 'Phone number is a required identifier, you can not set it to null.',
};

export default Object.freeze(user);
