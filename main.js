const args = process.argv.slice(2)    //initialize args

function Convert() {
  var str = '';
  for (let i=0; i<args.length; i++) {       //iterate through all args
    for (let j=0; j<args[i].length; j++) {    //for each digit
      switch(args[i][j]) {
        case '0':
          str = str + 'Zero';
          break;
        case '1':
          str = str + 'One';
          break;
        case '2':
          str = str + 'Two';
          break;
        case '3':
          str = str + 'Three';
          break;
        case '4':
          str = str + 'Four';
          break;
        case '5':
          str = str + 'Five';
          break;
        case '6':
          str = str + 'Six';
          break;
        case '7':
          str = str + 'Seven';
          break;
        case '8':
          str = str + 'Eight';
          break;
        case '9':
          str = str + 'Nine';
          break;
        }
    }
    if (i != args.length-1)      //if not the last integer to convert
      str = str + ',';
  }
  console.log(str);     //print
}

Convert();
