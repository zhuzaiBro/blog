import request from '@/utils/request'

export function getDocuments() {
    return request({
        url: '/api/document',
        method: 'get',
    })
}