import * as Yup from 'yup';

export default class TicketSchema {
  initialValues;

  schema;

  constructor() {
    this.schema = Yup.object().shape({
      from: Yup.string().required(),
      to: Yup.string().required(),
      passenger: Yup.number().required().min(1),
    });

    this.initialValues = {
      from: '',
      to: '',
      passenger: 1,
    };
  }
}
