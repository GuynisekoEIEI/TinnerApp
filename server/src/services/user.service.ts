import mongoose, { RootFilterQuery } from 'mongoose'
import { updateProfile, user, _userPagination, _userPaginator } from './../types/user.type'
import { IUserDocument } from '../interfaces/user.interface'
import { QueryHelper } from '../helpers/query.helper'
export const UserService = {

    get: function (pagination: _userPagination, user_id: string): Promise<_userPaginator> {
        let filter: RootFilterQuery<IUserDocument>[] = []
        _id: { $nin: new mongoose.Types.ObjectId(user_id) }
        $and: QueryHelper.parseUserQuery(pagination)
        throw new Error('not implement')
    },
    getByUserName: function (username: string): Promise<user> {
        throw new Error('not implement')
    },
    updateProfile: function (newProfile: updateProfile, user_id: string): Promise<user> {
        throw new Error('not implement')
    }
}

