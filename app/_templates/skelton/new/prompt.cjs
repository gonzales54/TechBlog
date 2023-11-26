module.exports = [
  {
    type: 'select',
    name: 'dir',
    message: 'ディレクトリを選択してください',
    choices: ['pages', 'layout', 'model', 'global'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネント名を入力してください',
    validate: (input) => input !== '',
  },
]