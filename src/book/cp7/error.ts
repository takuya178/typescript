const ask = () => {
  return prompt('When is your birthday?') || ''
}
const parse = (birthDay: string): Date => {
  return new Date(birthDay);
}
let date = parse(ask());


// ユーザーが入力した日付を検証する必要がある。
const parse = (birthDay: string): Date | null => {
  let date = new Date(birthDay);
  if (!isValid(date)) {
    return null;
  }
  return date;
}
// あたれられた日付が有効かどうかチェック。
const isValid = () => {
  ..
}
let date = parse(ask())
if (date) {
  console.info('Date is', date.toISOString())
} else {
  console.log('Error parsing date for some reason')
}
// これだとparseはその操作が失敗した理由を正確には教えてくれない。



// nullを返す代わりに例外をスロー
const parse = (birthday: string): Date => {
  let date = new Date(birthday)
  if (!isValid(date)) {
    throw new RangeError("~");
  }
  return date;
}
// このコードを利用する時には、例外を必ずキャッチする必要がある。
try {
  let date = parse(ask())
  console.info('Date is', date.toISOString())
} catch (e) {
  console.error(e.message);
}



class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

const parse = (birthday: string): Date => {
  let date = new Date(birthday)
  if (!isValid(date)) {
    throw new InvalidDateFormatError('Error a date in the form ~')
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('Are you timelod?');
  }
  return date;
}
try {
  let date = parse(ask())
  console.info('Date is', date.toISOString());
} catch(e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message)
  } else if (e instanceof DateIsInTheFutureError) {
    console.info(e.message);
  } else {
    throw e;
  }
}



// 例外を返す
// TsはJavaのようなThrows節はサポートしていないが、Unionを使って同様のことができる。
const parse = (birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date = new Data(birthday);
  if (!isValid(date)) {
    throw new InvalidDateFormatError('Error a date in the form ~')
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('Are you timelod?');
  }
  return date;
}
// InvalidDateFormatError, DateIsInTheFutureError, 成功した解析結果全てを処理する必要がある。
let result = parse(ask())
if (result instanceof InvalidDateFormatError) {
  console.error(result.message);
} else if (result instanceof DateIsInTheFutureError) {
  console.error(result.message)
} else {
  console.info('Date is', result.toISOString());
}

