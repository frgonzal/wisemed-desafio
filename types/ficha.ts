export type InfoMiniFicha = {
  specialist: string;
  specialty: string;
  name: string;
  age: number;
  medical_record: number;
  diagnosis: string;
  intervention: string;
  preanesthetic_evaluation: boolean;
  request_time_days: number;
  suspensions: number;
};


export type DataFicha = {
  ficha: InfoMiniFicha;
  column: Symbol;
  id: number; 
}