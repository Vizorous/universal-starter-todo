/**
 * @generated SignedSource<<fc31805c6521693bcfe5ae589c382736>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetCategoryOnTodoInput = {
  id: string;
  relationId: string;
};
export type EditCategoriesMutation$variables = {
  input: SetCategoryOnTodoInput;
};
export type EditCategoriesMutation$data = {
  readonly setCategoryOnTodo: {
    readonly category: {
      readonly id: string;
      readonly name: string;
    } | null;
    readonly id: string;
    readonly name: string;
  };
};
export type EditCategoriesMutation = {
  response: EditCategoriesMutation$data;
  variables: EditCategoriesMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "setCategoryOnTodo",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditCategoriesMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditCategoriesMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "4f516e8c82a02ae92b5bbfb1bb8ab1d9",
    "id": null,
    "metadata": {},
    "name": "EditCategoriesMutation",
    "operationKind": "mutation",
    "text": "mutation EditCategoriesMutation(\n  $input: SetCategoryOnTodoInput!\n) {\n  setCategoryOnTodo(input: $input) {\n    id\n    name\n    category {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "007488f44992e66b2796a8a66685b41f";

export default node;
