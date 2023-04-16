export function FunctionData() {
  return (
    <>
      <h2>
        <span
          className="text-cyan-300 hover:opacity-50"
          title="SPECIAL KEYWORD defines a generator function expression">
          function
        </span>{' '}
        <span className="text-green-300 hover:opacity-50" title="Function Name">
          concatenatePersonsData
        </span>
        <span
          className="text-amber-300 hover:opacity-50"
          title="In JavaScript parentheses needs to enclose a list of parameters to the function">
          {'( '}
        </span>
        <span
          title="PARAMETRS: placeholders to receive input values. Like local variables of a function"
          className="text-orange-300 hover:opacity-50">
          {' '}
          firstName
          <span
            className="text-stone-500 hover:opacity-50"
            title="Comma, Needs to separate a list of parameters">
            ,{' '}
          </span>
          lastName
          <span
            className="text-stone-500 hover:opacity-50"
            title="Comma, Needs to separate a list of parameters">
            ,{' '}
          </span>
          points
        </span>
        <span
          className="text-amber-300 hover:opacity-50"
          title="In JavaScript parentheses needs to enclose a list of parameters to the function">
          {' ) '}
        </span>{' '}
        <span
          className="text-amber-500 hover:opacity-50"
          title="this curly brackets open FUNCTION BODY: block of code that can be reuse. Processes the function input data">
          {'{'}
        </span>
      </h2>
      <h2>
        <span
          className="text-rose-500 hover:opacity-50"
          title="SPECIAL KEYWORD: statement ends function execution and specifies a value to be returned to the function caller">
          return
        </span>{' '}
        <span
          className="text-red-500 hover:opacity-50"
          title="Template literals (Template strings). Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.">
          {'`'}
        </span>
        <span
          className="text-stone-500 hover:opacity-50"
          title="placeholders of the form ${expression}">
          {'${'}
        </span>
        <span
          title="variable contains value with type of string"
          className="text-rose-100 hover:opacity-50">
          firstName
        </span>
        <span
          className="text-stone-500 hover:opacity-50"
          title="placeholders of the form ${expression}">
          {'} '}
        </span>
        <span
          className="text-stone-500 hover:opacity-50"
          title="placeholders of the form ${expression}">
          {'${'}
        </span>
        <span
          title="variable contains value with type of string"
          className="text-rose-100 hover:opacity-50">
          lastName
        </span>
        <span
          className="text-stone-500 hover:opacity-50"
          title="placeholders of the form ${expression}">
          {'} '}
        </span>
        <span className="text-amber-300 hover:opacity-50" title="plane text">
          {' '}
          has{' '}
        </span>{' '}
        <span
          className="text-stone-500 hover:opacity-50"
          title="placeholders of the form ${expression}">
          {'${'}
        </span>
        <span
          title="variable contains value with type of number"
          className="text-rose-100 hover:opacity-50">
          points
        </span>
        <span
          className="text-stone-500 hover:opacity-50"
          title="placeholders of the form ${expression}">
          {'} '}
        </span>{' '}
        <span className="text-amber-300 hover:opacity-50" title="plane text">
          {' '}
          point(s)
        </span>
        <span
          className="text-red-500 hover:opacity-50"
          title="Template literals (Template strings). Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.">
          {'`'}
        </span>
        <span
          className="text-stone-500 hover:opacity-50"
          title="the semicolon denotes the end of a statement">
          ;
        </span>
      </h2>
      <h2
        className="text-amber-500 hover:opacity-50"
        title="this curly brackets close FUNCTION BODY: block of code that can be reuse. Processes the function input data">
        {'}'}
      </h2>

      <h2>
        <span
          className="text-cyan-300 hover:opacity-50"
          title="SPECIAL KEYWORD: declaration creates block-scoped constant, can't be reassign!">
          const{' '}
        </span>
        <span
          className="text-violet-700 hover:opacity-50"
          title="Variable to save returned value (function output)">
          person
        </span>
        <span
          className="text-rose-500 hover:opacity-50"
          title="Assignment operator. An assignment operator assigns a value to its left operand based on the value of its right operand">
          {' '}
          ={' '}
        </span>
        <span className="text-green-300 hover:opacity-50" title="function Name">
          concatenatePersonsData
        </span>
        <span
          className="text-amber-300 hover:opacity-50"
          title="Calling, running, or invoking the function using ()">
          {'( '}
        </span>
        <span
          className="text-lime-300 hover:opacity-50"
          title="ARGUMENTS: actual values of function parametrs, to input data">
          <span
            className="text-stone-500 hover:opacity-50"
            title="Strings can be written with either single or double quotes or backtick">
            {`"`}
          </span>
          {'Dom'}
          <span
            className="text-stone-500 hover:opacity-50"
            title="Strings can be written with either single or double quotes or backtick">
            {`"`}
          </span>
          <span
            className="text-stone-500 hover:opacity-50"
            title="Comma, Needs to separate a list of arguments">
            ,{' '}
          </span>{' '}
          <span
            className="text-stone-500 hover:opacity-50"
            title="Strings can be written with either single or double quotes or backtick">
            {`"`}
          </span>
          {'Snow'}{' '}
          <span
            className="text-stone-500 hover:opacity-50"
            title="Strings can be written with either single or double quotes or backtick">
            {`"`}
          </span>
          <span
            className="text-stone-500 hover:opacity-50"
            title="Comma, Needs to separate a list of arguments">
            ,{' '}
          </span>
          <span className="text-violet-700 hover:opacity-50">10</span>
        </span>
        <span
          className="text-amber-300 hover:opacity-50"
          title="Calling, running, or invoking the function using ()">
          {' )'}
        </span>
        <span
          className="text-stone-500 hover:opacity-50"
          title="the semicolon denotes the end of a statement">
          ;
        </span>
      </h2>
    </>
  );
}
