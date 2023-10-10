export class ValidationExpressions {
  public static readonly Email =
    /^(\w|[^_]\.|[\-])+((\@){1}([^_]))(([a-z]|[\d]|[\-]|\.)+|([^_]\.[^_])*)+\..+$/;
  public static readonly Sms = /^([0-9]{1,4}\s*$)/;
  public static readonly Number = /^\d+$/;
}
