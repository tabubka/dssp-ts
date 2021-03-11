import {APIStack} from "./api"
import MyStack from "./MyStack.js"

export default function main(app) {
  APIStack(app, {});

  new MyStack(app, 'mystack');
}
