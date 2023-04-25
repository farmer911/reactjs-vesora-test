import Sumary from "./Sumary.view";
import { useSelector } from "react-redux";
import { Store } from "../../types/Store";
import moment from "moment";

const SumaryContainer = (): JSX.Element => {
  const sumary = useSelector((_: Store) => _.profile.data || {})

  const smsCarrier = [{
    number: sumary.carrier_status?.status || '',
    name: 'since ' + moment(sumary.carrier_status?.since).format('MMMM D, YYYY')
  }]

  const activity = sumary?.activity ? Object.keys(sumary.activity).map((key: any) => {
    return {
      name: key,
      //@ts-ignore
      number: sumary.activity[key]
    }
  }) : [];

  const generalProps = {
    smsCarrier,
    ...sumary,
    activity,
  }

  return <Sumary {...generalProps} />
}

export default SumaryContainer;