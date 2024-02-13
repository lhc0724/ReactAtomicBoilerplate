import { useIntl } from 'react-intl';

/**
 * usage)
 *
 * const t = useLocale();
 *
 * const result = t({ id: 'json key name' })
 *
 * result: "json value"
 * @returns formatMessage func
 */
const useLocale = () => {
  const intl = useIntl();
  return intl.formatMessage;
};

export default useLocale;
