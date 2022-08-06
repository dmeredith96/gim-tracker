"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerHiscores = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const oldschooljs_1 = require("oldschooljs");
dotenv_1.default.config();
const getPlayerHiscores = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const hiscores = yield oldschooljs_1.Hiscores.fetch(req.query.name);
    res.send(hiscores);
  });
exports.getPlayerHiscores = getPlayerHiscores;
